import PropTypes from 'prop-types'
import React from 'react'
import { createPopper, Placement, Modifier, Options, Instance } from '@popperjs/core'
import Portal, { ContainerType } from '../portal'
import useUpdate from '../../hooks/useUpdate'
import useMountedState from '../../hooks/useMountedState'
import PopperContext from './popper-context'
import { mergeEvents } from '../../utils/event'
import CssTransition, { CssTransitionProps } from '../../../css-transition'
import useClickOutside from '../../hooks/useClickOutside'
import { increaseZIndex, getCurrentIndex } from '../../utils/zIndex-manager'
import useConstant from '../../hooks/useConstant'
import { fillRef } from '../../utils/ref'

export { Placement }
export { Modifier }

export interface PopperProps {
  placement?: Placement
  getPopupContainer?: ContainerType
  popup: React.ReactElement | ((placement: Placement) => React.ReactElement)
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>
  visible?: boolean
  onVisibleChange?: (visible: boolean) => void
  delayHide?: number
  delayShow?: number
  trigger?: 'hover' | 'focus' | 'click' | 'contextMenu' | 'custom'
  allowPopupEnter?: boolean
  transitionName?: CssTransitionProps['classNames']
  lazyRender?: boolean
  arrow?: React.ReactElement | ((placement: Placement) => React.ReactElement)
  offset?: number | string
  overlayStyle?: React.CSSProperties | ((placement: Placement) => React.CSSProperties)
}

const defaultGetContainer = () => document.body

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const defaultPopperModifiers: Array<Partial<Modifier<string, any>>> = [
  {
    name: 'preventOverflow',
    options: {
      boundariesElement: 'window'
    }
  }
]

// 1000/60，约等于1帧的时间
const TIME_DELAY = 1000 / 60

/**
 * 此组件是所有弹出框组件的基础组件
 * 为组件添加了很多事件，并且将popup和reference进行分开处理而不是在最外层添加一个div，利用React的事件冒泡统一处理的原因是：
 * 添加div固然减少了组件的复杂度，但是也影响了需要被添加popper的组件或者dom元素。
 * 本组件的优点在于对children零干扰，不影响原来组件的样式和结构。
 * @param props
 */
const Popper: React.FunctionComponent<PopperProps> = (props) => {
  const {
    placement = 'auto',
    getPopupContainer = defaultGetContainer,
    popup,
    children,
    visible = false,
    onVisibleChange,
    delayHide = 0,
    delayShow = 0,
    trigger = 'hover',
    allowPopupEnter = true,
    transitionName,
    lazyRender = true,
    arrow,
    offset = 0,
    overlayStyle
  } = props

  const popperJsRef = React.useRef<Instance>()
  const referenceNodeRef = React.useRef<HTMLDivElement>(null)
  const popupNodeRef = React.useRef<HTMLDivElement>(null)
  const delayTimerRef = React.useRef<NodeJS.Timeout>()
  const [actualVisible, setActualVisible] = React.useState(visible)

  // 实际的placement，可能和传入的placement不同
  const [actualPlacement, setActualPlacement] = React.useState(placement)

  // 弹出框zIndex，保证后弹出的弹出框zIndex更大
  const [zIndex, setZIndex] = React.useState(getCurrentIndex)

  // popper是否需要挂载的状态
  // visible为true时就直接挂载
  const [needMount, setNeedMount] = React.useState(visible)

  const isMounted = useMountedState()

  // 子popper关闭函数集合
  const closeHandlerRef = React.useRef<Array<() => void>>([])

  // 子popper函数，将子popper的关闭函数传递给当前组件，这样在当前popper关闭时，可以一同关闭子popper
  const addCloseHandler = React.useCallback(
    (handler: () => void) => {
      closeHandlerRef.current.push(handler)
    },
    [closeHandlerRef]
  )

  // 子组件销毁时移除
  const removeCloseHandler = React.useCallback(
    (handler: () => void) => {
      const arr = closeHandlerRef.current
      closeHandlerRef.current = arr.slice(arr.indexOf(handler), 1)
    },
    [closeHandlerRef]
  )

  /**
   * 设置popper显示状态，处理特殊情况。
   * 通常需要调用这个方法进行状态设置
   */
  const setActualWrapper = React.useCallback(
    (isVisible: boolean) => {
      // 第一次显示时需要设置popper为可挂载状态
      if (isVisible) {
        setNeedMount(true)
      }
      // 取消上次定时器的执行
      clearTimeout(delayTimerRef.current!)
      // 重设定时器，最少需要等待TIME_DELAY时间
      delayTimerRef.current = setTimeout(
        () => {
          // 判断组件是否已经被卸载
          // 由于setTimeout在组件卸载后可能才执行，必须进行必要的判断
          if (isMounted()) {
            // 关闭popper时需要关闭所有子popper
            if (!isVisible) {
              closeHandlerRef.current.forEach((it) => it())
            }
            setActualVisible(isVisible)
          }
        },
        isVisible ? Math.max(delayShow, TIME_DELAY) : Math.max(delayHide, TIME_DELAY)
      )
    },
    [delayTimerRef, isMounted, delayShow, delayHide, closeHandlerRef]
  )

  /**
   * 处理父popper
   */
  const {
    addCloseHandler: addParentCloseHandler,
    removeCloseHandler: removeParentCloseHandler
  } = React.useContext(PopperContext)

  // 将本popper的关闭函数加入父popper中
  React.useEffect(() => {
    const handler = () => setActualWrapper(false)
    addParentCloseHandler(handler)
    return () => {
      removeParentCloseHandler(handler)
    }
  }, [addParentCloseHandler, removeParentCloseHandler, setActualWrapper])

  const modifiers = React.useMemo(() => {
    return defaultPopperModifiers.concat([])
  }, [])

  const createPopperJs = React.useCallback(
    (placement: Placement) => {
      const popperJs = popperJsRef.current
      if (popperJs) {
        popperJs.destroy()
        popperJsRef.current = undefined
      }

      const popup = popupNodeRef.current
      const reference = referenceNodeRef.current

      if (!popup || !reference) {
        return
      }

      const options: Partial<Options> = {
        placement,
        modifiers,
        onFirstUpdate: (state) => setActualPlacement(state.placement!)
      }
      popperJsRef.current = createPopper(reference, popup, options)
    },
    [modifiers]
  )

  const updatePopperJs = React.useCallback((placement: Placement) => {
    if (popperJsRef.current) {
      popperJsRef.current
        .setOptions({
          placement
        })
        .then((state) => {
          setActualPlacement(state.placement!)
        })
    }
  }, [])

  // ====================常量=====================
  const getOnVisibleChange = useConstant(onVisibleChange)
  const getSetActualWrapper = useConstant(setActualWrapper)
  const getCreatePopperJs = useConstant(createPopperJs)
  const getUpdatePopperJs = useConstant(updatePopperJs)
  // ============================================

  // 更新actualVisible时触发onVisibleChange函数
  useUpdate(() => {
    const onVisibleChange = getOnVisibleChange()
    onVisibleChange && onVisibleChange(actualVisible)
  }, [
    actualVisible,
    // 常量
    getOnVisibleChange
  ])

  // visible修改时触发actualVisible更新
  React.useEffect(() => {
    setTimeout(() => {
      getSetActualWrapper()(visible)
      // 增加延时保证这个方法最后调用,时间不能大于TIME_DELAY,否则上一个任务就执行完了
    }, TIME_DELAY * 0.5)
  }, [
    visible,
    // 常量
    getSetActualWrapper
  ])

  // 弹出框显示时更新位置
  React.useEffect(() => {
    if (actualVisible) {
      // 更新zIndex
      setZIndex(increaseZIndex())
      if (!popperJsRef.current) {
        getCreatePopperJs()(placement)
      } else {
        getUpdatePopperJs()(placement)
      }

      // 只有显示时才监听事件
      popperJsRef.current!.setOptions({
        modifiers: [
          ...modifiers,
          {
            name: 'eventListeners',
            enabled: true
          }
        ]
      })
    } else {
      if (popperJsRef.current) {
        popperJsRef.current.setOptions({
          modifiers: [
            ...modifiers,
            {
              name: 'eventListeners',
              enabled: false
            }
          ]
        })
      }
    }
  }, [
    actualVisible,
    placement,
    // 常量
    modifiers,
    getCreatePopperJs,
    getUpdatePopperJs
  ])

  // 组件销毁时销毁popperJs
  React.useEffect(() => {
    return () => {
      const popperJs = popperJsRef.current
      if (popperJs) {
        popperJs.destroy()
      }
    }
  }, [])

  /**
   * 进入popup区域时触发。
   * 鼠标有可能从reference区域出来，此时需要清除定时器，否则reference的鼠标移出事件会关闭popper
   */
  const onPopupMouseEnter = React.useCallback(() => {
    // 取消定时器
    clearTimeout(delayTimerRef.current!)
    if (!allowPopupEnter) {
      setActualWrapper(false)
    }
  }, [delayTimerRef, setActualWrapper, allowPopupEnter])

  /**
   * 如果触发器是hover，则移出popup需要关闭popup
   */
  const onPopupMouseLeave = React.useCallback(() => {
    if (trigger === 'hover') {
      setActualWrapper(false)
    }
  }, [setActualWrapper, trigger])

  /**
   * popup点击事件,
   * 由于此方法可能会在onClickoutside之前执行，但是需要取消onClickoutside的执行。
   *
   * 让clickoutside先触发，此方法会取消onClickoutside
   * 延迟时间必须小于TIME_DELAY,否则onClickOutside就执行了.也要小于TIME_DELAY * 0.5.
   * 即使频繁触发此方法，也不需要清除此定时器，因为在setActualWrapper中已经清除了相关定时器
   */
  const onPopupClick = React.useCallback(() => {
    if (trigger === 'click' || trigger === 'contextMenu') {
      setTimeout(() => setActualWrapper(true), TIME_DELAY * 0.3)
    }
  }, [setActualWrapper, trigger])

  const onMouseEnter = React.useCallback(() => {
    // 如果是从popup移动过来，需要先清除popup的定时关闭
    clearTimeout(delayTimerRef.current!)
    if (trigger === 'hover') {
      setActualWrapper(true)
    }
  }, [delayTimerRef, setActualWrapper, trigger])

  const onMouseLeave = React.useCallback(() => {
    if (trigger === 'hover') {
      setActualWrapper(false)
    }
  }, [setActualWrapper, trigger])

  const onFocus = React.useCallback(() => {
    if (trigger === 'focus') {
      setActualWrapper(true)
    }
  }, [setActualWrapper, trigger])

  const onBlur = React.useCallback(() => {
    if (trigger === 'focus') {
      setActualWrapper(false)
    }
  }, [setActualWrapper, trigger])

  const onContextMenu = React.useCallback(() => {
    if (trigger === 'contextMenu') {
      setActualWrapper(true)
    }
  }, [setActualWrapper, trigger])

  const onReferenceClick = React.useCallback(() => {
    if (trigger === 'click') {
      setActualWrapper(true)
    }
  }, [setActualWrapper, trigger])

  const onClickOutside = React.useCallback(() => {
    if (trigger === 'click' || trigger === 'contextMenu') {
      setActualWrapper(false)
    }
  }, [setActualWrapper, trigger])

  // 在reference外点击时触发
  useClickOutside(referenceNodeRef, onClickOutside)

  // popup
  const popupNode = typeof popup === 'function' ? popup(actualPlacement) : popup

  // arrow
  let arrowNode = typeof arrow === 'function' ? arrow(actualPlacement) : arrow

  if (arrowNode) {
    arrowNode = React.cloneElement(arrowNode, {
      'data-popper-arrow': ''
    })
  }

  const popupStyle: React.CSSProperties = {
    zIndex,
    position: 'absolute'
  }
  const direction = actualPlacement.split('-')[0]
  if (direction === 'top') {
    popupStyle.paddingBottom = offset
  } else if (direction === 'bottom') {
    popupStyle.paddingTop = offset
  } else if (direction === 'left') {
    popupStyle.paddingRight = offset
  } else {
    popupStyle.paddingLeft = offset
  }

  /**
   * 提供介入popup弹出框弹出动画的操作，比如根据位置进行动画定位。可以参见tooltip
   */
  const overlayStyleWrapper =
    typeof overlayStyle === 'function' ? overlayStyle(actualPlacement) : overlayStyle || {}

  overlayStyleWrapper.position = 'relative'

  const portal = (
    <Portal getContainer={getPopupContainer}>
      <PopperContext.Provider
        value={{
          addCloseHandler,
          removeCloseHandler
        }}
      >
        <div
          ref={popupNodeRef}
          onMouseEnter={onPopupMouseEnter}
          onMouseLeave={onPopupMouseLeave}
          onClick={onPopupClick}
          style={popupStyle}
        >
          <CssTransition show={actualVisible} forceRender={true} classNames={transitionName}>
            <div style={overlayStyleWrapper}>
              {arrowNode}
              {popupNode}
            </div>
          </CssTransition>
        </div>
      </PopperContext.Provider>
    </Portal>
  )
  /**
   * 添加事件到children中，但是不能妨碍children中原来的事件，
   * 所以对于相同的事件需要合并
   */
  const {
    onBlur: _onBlur,
    onClick: _onClick,
    onContextMenu: _onContextMenu,
    onFocus: _onFocus,
    onMouseEnter: _onMouseEnter,
    onMouseLeave: _onMouseLeave,
    ...others
  } = children.props
  const childrenNode = React.cloneElement(children, {
    ...others,
    onBlur: mergeEvents(onBlur, _onBlur),
    onClick: mergeEvents(onReferenceClick, _onClick),
    onContextMenu: mergeEvents(onContextMenu, _onContextMenu),
    onFocus: mergeEvents(onFocus, _onFocus),
    onMouseEnter: mergeEvents(onMouseEnter, _onMouseEnter),
    onMouseLeave: mergeEvents(onMouseLeave, _onMouseLeave)
  })

  return (
    <>
      {(!lazyRender || needMount) && portal}
      {/* 保证children上原有的ref能够触发 */}
      {fillRef(childrenNode, referenceNodeRef)}
    </>
  )
}

Popper.propTypes = {
  placement: PropTypes.oneOf([
    'auto',
    'top',
    'left',
    'right',
    'bottom',
    'auto-start',
    'auto-end',
    'top-start',
    'top-end',
    'bottom-start',
    'bottom-end',
    'left-start',
    'left-end',
    'right-start',
    'right-end'
  ]),
  popup: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  children: PropTypes.element.isRequired,
  visible: PropTypes.bool,
  onVisibleChange: PropTypes.func,
  delayHide: PropTypes.number,
  delayShow: PropTypes.number,
  trigger: PropTypes.oneOf(['hover', 'focus', 'click', 'contextMenu', 'custom']),
  allowPopupEnter: PropTypes.bool,
  lazyRender: PropTypes.bool,
  arrow: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  overlayStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
}

export default Popper