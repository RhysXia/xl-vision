import React from 'react'
import { namePrefix } from '../commons/config'
import Portal from '../commons/base/portal'
import CssTransition from '../css-transition'
import { on } from '../commons/utils/event'
import { increaseZIndex } from '../commons/utils/zIndex-manager'
import Button, { ButtonProps } from '../button/button'
import FasTimes from '../icon/icons/fas-times'
import PropTypes from 'prop-types'
import useUpdate from '../commons/hooks/useUpdate'
import useConstant from '../commons/hooks/useConstant'
import promisefy from '../commons/utils/promisefy'

export interface ModalProps {
  visible: boolean
  prefixCls?: string
  forceRender?: boolean
  maskClosable?: boolean
  onVisibleChange?: (visible: boolean) => void
  width?: number | string
  title?: React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
  onOk?: () => void | Promise<void>
  onCancel?: () => void | Promise<void>
  okText?: string
  cancelText?: string
  okButtonProps?: Omit<ButtonProps, 'children'>
  cancelButtonProps?: Omit<ButtonProps, 'children'>
  closable?: boolean
  closeIcon?: React.ReactNode
  destroyOnClose?: boolean
  afterClose?: () => void
}

const getContainer = () => document.body

const defaultOkButtonProps: Omit<ButtonProps, 'children'> = {
  type: 'primary'
}

let mousePosition: { x: number; y: number } | null
// 计算滚动条宽度
const cb = (e: MouseEvent) => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  }
  // 100ms 内发生过点击事件，则从点击位置动画展示
  // 这样可以兼容非点击方式展开
  setTimeout(() => {
    mousePosition = null
  }, 100)
}
on('click', cb)

// 记录打开的modal数量
let modalCount = 0
// 保存body中的样式
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let bodyStyle: any

const Modal: React.FunctionComponent<ModalProps> = props => {
  const {
    visible,
    prefixCls = `${namePrefix}-modal`,
    maskClosable = true,
    forceRender,
    onVisibleChange,
    width = 520,
    title,
    children,
    footer,
    onCancel,
    onOk,
    okText = '确定',
    cancelText = '取消',
    okButtonProps = defaultOkButtonProps,
    cancelButtonProps,
    closable = true,
    closeIcon,
    destroyOnClose,
    afterClose
  } = props

  const [needMount, setNeedMount] = React.useState(false)
  const [needDestory, setNeedDestory] = React.useState(false)
  const [display, setDisplay] = React.useState(false)
  const [zIndex, setZindex] = React.useState(0)
  const [okLoading, setOkLoading] = React.useState(false)
  const [cancelLoading, setCancelLoading] = React.useState(false)

  React.useEffect(() => {
    setDisplay(visible)
  }, [visible])

  React.useEffect(() => {
    if (display) {
      setZindex(increaseZIndex)

      setNeedMount(true)
      setNeedDestory(false)
    }
  }, [display])

  //==================================常量====================================
  const getOnVisibleChange = useConstant(onVisibleChange)
  //=========================================================================

  useUpdate(() => {
    const onVisibleChange = getOnVisibleChange()
    onVisibleChange && onVisibleChange(display)
  }, [
    display,
    //常量
    getOnVisibleChange
  ])

  const onOkHandler = React.useCallback(() => {
    const fn = () => {
      setOkLoading(true)
      return onOk && onOk()
    }
    promisefy(fn).then(() => {
      setDisplay(false)
      setOkLoading(false)
    })
  }, [onOk])

  const onCancelHandler = React.useCallback(() => {
    const fn = () => {
      setCancelLoading(true)
      return onCancel && onCancel()
    }
    promisefy(fn).then(() => {
      setDisplay(false)
      setCancelLoading(false)
    })
  }, [onCancel])

  const onMaskClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!maskClosable) {
        return
      }
      if (e.target === e.currentTarget) {
        onCancelHandler()
      }
    },
    [maskClosable, onCancelHandler]
  )

  const beforeEnter = React.useCallback((el: HTMLElement) => {
    // 判断body样式是否已经保存
    if (modalCount === 0) {
      // 保存原来的样式
      bodyStyle = {
        overflow: document.body.style.overflow,
        position: document.body.style.position,
        paddingRight: document.body.style.paddingRight
      }

      // 添加样式到body上
      const sidebarWidth =
        window.innerWidth - (document.body.clientWidth || document.documentElement.clientWidth)
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'relative'
      // 避免滚动条造成的抖动
      document.body.style.paddingRight = sidebarWidth + 'px'
    }
    modalCount++

    // 设置动画原点
    if (mousePosition) {
      const modal = el.childNodes[0] as HTMLElement
      const doc = modal.ownerDocument!
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = doc.defaultView || (doc as any).parentWindow // for ie
      setTransformOrigin(
        modal,
        `${mousePosition.x - getScroll(w) - modal.offsetLeft}px ${mousePosition.y -
          getScroll(w, true) -
          modal.offsetTop}px`
      )
    }
  }, [])

  const afterLeave = React.useCallback(
    (el: HTMLElement) => {
      // 判断是不是最后一个modal，最后一个才需要恢复body样式
      if (modalCount === 1) {
        // 恢复body中原来的样式
        Object.keys(bodyStyle).forEach(key => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          document.body.style[key as any] = bodyStyle[key]
        })
      }

      modalCount--

      // 消除动画原点
      const modal = el.childNodes[0] as HTMLElement
      setTransformOrigin(modal, '')

      // 取消挂载
      if (destroyOnClose) {
        setNeedDestory(true)
      }
      // 动画完成后回调，cancel时也会调用
      afterClose && afterClose()
    },
    [destroyOnClose, afterClose]
  )

  const headerNode = React.useMemo(() => {
    if (typeof title === 'undefined') {
      return null
    }

    if (typeof title === 'string') {
      return <div className={`${prefixCls}__title`}>{title}</div>
    }
    return title
  }, [title, prefixCls])

  const closeIconNode = React.useMemo(() => {
    if (!closable) {
      return null
    }

    return (
      <button className={`${prefixCls}__icon`} onClick={onCancelHandler}>
        <span className={`${prefixCls}__icon-x`}>{closeIcon || <FasTimes />}</span>
      </button>
    )
  }, [closable, closeIcon, prefixCls, onCancelHandler])

  const footerNode = (() => {
    if (typeof footer === 'undefined') {
      return (
        <>
          <Button loading={cancelLoading} {...cancelButtonProps} onClick={onCancelHandler}>
            {cancelText}
          </Button>
          <Button loading={okLoading} {...okButtonProps} onClick={onOkHandler}>
            {okText}
          </Button>
        </>
      )
    }
    return footer
  })()

  if (!display && needDestory) {
    return null
  }
  // 只有在第一次展示的时候才会挂载到dom中
  if (!display && !needMount && !forceRender) {
    return null
  }

  const modal = (
    // 保证节点加入dom后才触发变化
    <CssTransition
      show={display && needMount && !needDestory}
      forceRender={true}
      classNames={`${prefixCls}--fade`}
      beforeEnter={beforeEnter}
      afterLeave={afterLeave}
      // 离开失败一般是正在进行下一次进入，必须清除所有添加的样式以防影响
      leaveCancelled={afterLeave}
    >
      <div
        className={`${prefixCls}__wrap`}
        onClick={onMaskClick}
        style={{
          zIndex
        }}
      >
        <div className={prefixCls} style={{ width }}>
          {closeIconNode}
          {headerNode && <div className={`${prefixCls}__header`}>{headerNode}</div>}
          <div className={`${prefixCls}__body`}>{children}</div>
          {footerNode && <div className={`${prefixCls}__footer`}>{footerNode}</div>}
        </div>
      </div>
    </CssTransition>
  )

  return <Portal getContainer={getContainer}>{modal}</Portal>
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  prefixCls: PropTypes.string,
  maskClosable: PropTypes.bool,
  forceRender: PropTypes.bool,
  onVisibleChange: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.node,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  okButtonProps: PropTypes.object,
  cancelButtonProps: PropTypes.object,
  closable: PropTypes.bool,
  closeIcon: PropTypes.node,
  destroyOnClose: PropTypes.bool,
  afterClose: PropTypes.func
}

export default Modal

const setTransformOrigin = (el: HTMLElement, value: string) => {
  const style = el.style
  ;['Webkit', 'Moz', 'Ms', 'ms'].forEach((prefix: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    style[`${prefix}TransformOrigin` as any] = value
  })
  style[`transformOrigin`] = value
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getScroll = (w: any, top?: boolean) => {
  let ret = w[`page${top ? 'Y' : 'X'}Offset`]
  const method = `scroll${top ? 'Top' : 'Left'}`
  if (typeof ret !== 'number') {
    const d = w.document
    ret = d.documentElement[method]
    if (typeof ret !== 'number') {
      ret = d.body[method]
    }
  }
  return ret
}
