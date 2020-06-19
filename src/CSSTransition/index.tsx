import PropTypes from 'prop-types'
import React from 'react'
import { addClass, removeClass } from '../commons/utils/class'
import { nextFrame, onTransitionEnd } from '../commons/utils/transition'
import Transition, {
  TransitionProps,
  BeforeEventHook,
  EventHook,
  AfterEventHook,
  EventCancelledHook
} from '../Transition'

export type CSSTransitionClassesObject = {
  appear?: string
  appearActive?: string
  appearTo?: string
  enter?: string
  enterActive?: string
  enterTo?: string
  leave?: string
  leaveActive?: string
  leaveTo?: string
  disappear?: string
  disappearActive?: string
  disappearTo?: string
}

export type CSSTransitionClasses = CSSTransitionClassesObject | string

export interface CSSTransitionProps extends TransitionProps {
  css?: boolean
  transitionClasses?: CSSTransitionClasses
  timeout?:
    | number
    | {
        appear?: number
        enter?: number
        leave?: number
        disappear?: number
      }
}

export type TransitionElement = HTMLElement & {
  _ctc?: CSSTransitionClassesObject
  _done?: () => void
}

const CSSTransition: React.FunctionComponent<CSSTransitionProps> = (props) => {
  const {
    css = true,
    transitionClasses,
    beforeEnter,
    enter,
    afterEnter,
    enterCancelled,
    beforeLeave,
    leave,
    afterLeave,
    leaveCancelled,
    timeout,
    ...others
  } = props

  let {
    beforeAppear,
    appear,
    appearCancelled,
    afterAppear,
    beforeDisappear,
    disappear,
    afterDisappear,
    disappearCancelled
  } = props

  // 如果开启transitionOnFirst,默认使用enter和leave的生命周期方法
  beforeAppear = beforeAppear || beforeEnter
  appear = appear || enter
  afterAppear = afterAppear || afterEnter
  appearCancelled = appearCancelled || enterCancelled

  beforeDisappear = beforeDisappear || beforeLeave
  disappear = disappear || leave
  afterDisappear = afterDisappear || afterLeave
  disappearCancelled = disappearCancelled || leaveCancelled

  const transitionClassesObj = React.useMemo(() => {
    if (!transitionClasses) {
      return null
    }
    if (typeof transitionClasses === 'object') {
      return transitionClasses
    }
    return {
      appear: `${transitionClasses}-appear`,
      appearActive: `${transitionClasses}-appear-active`,
      appearTo: `${transitionClasses}-appear-to`,
      enter: `${transitionClasses}-enter`,
      enterActive: `${transitionClasses}-enter-active`,
      enterTo: `${transitionClasses}-enter-to`,
      leave: `${transitionClasses}-leave`,
      leaveActive: `${transitionClasses}-leave-active`,
      leaveTo: `${transitionClasses}-leave-to`,
      disappear: `${transitionClasses}-disappear`,
      disappearActive: `${transitionClasses}-disappear-active`,
      disappearTo: `${transitionClasses}-disappear-to`
    }
  }, [transitionClasses])

  const timeoutMap = React.useMemo(() => {
    if (!timeout) {
      return null
    }
    if (typeof timeout === 'object') {
      return timeout
    }
    return {
      appear: timeout,
      enter: timeout,
      leave: timeout,
      disappear: timeout
    }
  }, [timeout])

  const beforeAppearWrapper = React.useMemo(
    () =>
      createBeforeEventHook(
        css && {
          appear: transitionClassesObj?.appear,
          appearActive: transitionClassesObj?.appearActive
        },
        beforeAppear
      ),
    [css, transitionClassesObj?.appear, transitionClassesObj?.appearActive, beforeAppear]
  )

  const appearWrapper = React.useMemo(
    () =>
      createEventHook(
        ['appear'],
        css && {
          appearTo: transitionClassesObj?.appearTo
        },
        timeoutMap?.appear,
        appear
      ),
    [css, transitionClassesObj?.appearTo, timeoutMap?.appear, appear]
  )
  const afterAppearWrapper = React.useMemo(() => createAfterEventHook(afterAppear), [afterAppear])
  const appearCancelledWrapper = React.useMemo(() => createEventCancelledHook(appearCancelled), [
    appearCancelled
  ])

  const beforeEnterWrapper = React.useMemo(
    () =>
      createBeforeEventHook(
        css && {
          enter: transitionClassesObj?.enter,
          enterActive: transitionClassesObj?.enterActive
        },
        beforeEnter
      ),
    [css, transitionClassesObj?.enter, transitionClassesObj?.enterActive, beforeEnter]
  )

  const enterWrapper = React.useMemo(
    () =>
      createEventHook(
        ['enter'],
        css && {
          enterTo: transitionClassesObj?.enterTo
        },
        timeoutMap?.enter,
        enter
      ),
    [css, transitionClassesObj?.enterTo, timeoutMap?.enter, enter]
  )
  const afterEnterWrapper = React.useMemo(() => createAfterEventHook(afterEnter), [afterEnter])
  const enterCancelledWrapper = React.useMemo(() => createEventCancelledHook(enterCancelled), [
    enterCancelled
  ])

  const beforeLeaveWrapper = React.useMemo(
    () =>
      createBeforeEventHook(
        css && {
          leave: transitionClassesObj?.leave,
          leaveActive: transitionClassesObj?.leaveActive
        },
        beforeLeave
      ),
    [css, transitionClassesObj?.leave, transitionClassesObj?.leaveActive, beforeLeave]
  )

  const leaveWrapper = React.useMemo(
    () =>
      createEventHook(
        ['leave'],
        css && {
          leaveTo: transitionClassesObj?.leaveTo
        },
        timeoutMap?.leave,
        leave
      ),
    [css, transitionClassesObj?.leaveTo, timeoutMap?.leave, leave]
  )
  const afterLeaveWrapper = React.useMemo(() => createAfterEventHook(afterLeave), [afterLeave])
  const leaveCancelledWrapper = React.useMemo(() => createEventCancelledHook(leaveCancelled), [
    leaveCancelled
  ])

  const beforeDisappearWrapper = React.useMemo(
    () =>
      createBeforeEventHook(
        css && {
          disappear: transitionClassesObj?.disappear,
          disappearActive: transitionClassesObj?.disappearActive
        },
        beforeDisappear
      ),
    [css, transitionClassesObj?.disappear, transitionClassesObj?.disappearActive, beforeDisappear]
  )

  const disappearWrapper = React.useMemo(
    () =>
      createEventHook(
        ['disappear'],
        css && {
          disappearTo: transitionClassesObj?.disappearTo
        },
        timeoutMap?.disappear,
        disappear
      ),
    [css, transitionClassesObj?.disappearTo, timeoutMap?.disappear, disappear]
  )
  const afterDisappearWrapper = React.useMemo(() => createAfterEventHook(afterDisappear), [
    afterDisappear
  ])
  const disappearCancelledWrapper = React.useMemo(
    () => createEventCancelledHook(disappearCancelled),
    [disappearCancelled]
  )

  return (
    <Transition
      {...others}
      beforeAppear={beforeAppearWrapper}
      appear={appearWrapper}
      afterAppear={afterAppearWrapper}
      appearCancelled={appearCancelledWrapper}
      beforeEnter={beforeEnterWrapper}
      enter={enterWrapper}
      afterEnter={afterEnterWrapper}
      enterCancelled={enterCancelledWrapper}
      beforeLeave={beforeLeaveWrapper}
      leave={leaveWrapper}
      afterLeave={afterLeaveWrapper}
      leaveCancelled={leaveCancelledWrapper}
      beforeDisappear={beforeDisappearWrapper}
      disappear={disappearWrapper}
      afterDisappear={afterDisappearWrapper}
      disappearCancelled={disappearCancelledWrapper}
    />
  )
}

CSSTransition.propTypes = {
  transitionClasses: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      appear: PropTypes.string,
      appearActive: PropTypes.string,
      appearTo: PropTypes.string,
      enter: PropTypes.string,
      enterActive: PropTypes.string,
      enterTo: PropTypes.string,
      leave: PropTypes.string,
      leaveActive: PropTypes.string,
      leaveTo: PropTypes.string,
      disappear: PropTypes.string,
      disappearActive: PropTypes.string,
      disappearTo: PropTypes.string
    })
  ]),
  timeout: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      appear: PropTypes.number,
      enter: PropTypes.number,
      leave: PropTypes.number,
      disappear: PropTypes.number
    })
  ]),
  css: PropTypes.bool,
  beforeAppear: PropTypes.func,
  appear: PropTypes.func,
  afterAppear: PropTypes.func,
  appearCancelled: PropTypes.func,
  beforeEnter: PropTypes.func,
  enter: PropTypes.func,
  afterEnter: PropTypes.func,
  enterCancelled: PropTypes.func,
  beforeLeave: PropTypes.func,
  leave: PropTypes.func,
  afterLeave: PropTypes.func,
  leaveCancelled: PropTypes.func,
  beforeDisappear: PropTypes.func,
  disappear: PropTypes.func,
  afterDisappear: PropTypes.func,
  disappearCancelled: PropTypes.func
}

export default CSSTransition

const createBeforeEventHook = (
  ctc: CSSTransitionClassesObject | false,
  nativeHook?: BeforeEventHook
): BeforeEventHook => {
  return (el: TransitionElement) => {
    // for TransitionGroup
    el._ctc = {}
    if (ctc) {
      for (const name of Object.keys(ctc)) {
        const key = name as keyof CSSTransitionClassesObject
        const clazz = ctc[key]
        if (clazz) {
          addClass(el, clazz)
          el._ctc[key] = clazz
        }
      }
    }
    nativeHook && nativeHook(el)
  }
}

const createEventHook = (
  removedClassNames: Array<keyof CSSTransitionClassesObject>,
  ctc: CSSTransitionClassesObject | false,
  timeout?: number,
  nativeHook?: EventHook
): EventHook => {
  return (el: TransitionElement, done: () => void, isCancelled: () => boolean) => {
    let isInterrupt = false
    let cancelEvent: () => void
    let timeoutId: NodeJS.Timeout

    const doneCb = () => {
      el._done = undefined
      done()
    }

    nextFrame(() => {
      // 被用户强制中断
      if (isInterrupt) {
        return
      }
      if (!isCancelled()) {
        for (const name of removedClassNames) {
          const clazz = el._ctc![name]
          if (clazz) {
            removeClass(el, clazz)
            delete el._ctc![name]
          }
        }
        if (ctc) {
          for (const name of Object.keys(ctc)) {
            const key = name as keyof CSSTransitionClassesObject
            const clazz = ctc[key]
            if (clazz) {
              addClass(el, clazz)
              el._ctc![key] = clazz
            }
          }
        }
        if (timeout && timeout > 0) {
          timeoutId = setTimeout(doneCb, timeout)
        } else {
          cancelEvent = onTransitionEnd(el, doneCb)
        }
      }
      nativeHook && nativeHook(el, doneCb, isCancelled)
    })

    // for TransitionGroup
    el._done = () => {
      isInterrupt = true
      // 清除事件
      cancelEvent && cancelEvent()
      clearTimeout(timeoutId)
      if (!el._ctc) {
        return
      }
      // 移除所有样式
      for (const clazz of Object.values(el._ctc)) {
        clazz && el.classList.remove(clazz)
      }
      doneCb()
    }
  }
}

const createAfterOrCancelledEventHook = (
  nativeHook?: AfterEventHook | EventCancelledHook
): NonNullable<typeof nativeHook> => {
  return (el: TransitionElement) => {
    for (const name of Object.keys(el._ctc!)) {
      const key = name as keyof CSSTransitionClassesObject
      const clazz = el._ctc![key]
      clazz && removeClass(el, clazz)
      delete el._ctc![key]
    }
    nativeHook && nativeHook(el)
  }
}

const createAfterEventHook: (
  nativeHook?: AfterEventHook
) => AfterEventHook = createAfterOrCancelledEventHook

const createEventCancelledHook: (
  nativeHook?: EventCancelledHook
) => EventCancelledHook = createAfterOrCancelledEventHook