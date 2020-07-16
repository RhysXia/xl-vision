import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TransitionGroup, { TransitionGroupClasses } from '../TransitionGroup'
import ConfigContext from '../ConfigProvider/ConfigContext'
import useEventCallback from '../commons/hooks/useEventCallback'

export interface RippleProps extends React.HTMLAttributes<HTMLDivElement> {
  transitionClasses?: TransitionGroupClasses
  clsPrefix?: string
  leaveAfterEnter?: boolean
  className?: string
}

export interface RippleRef {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  start: (e?: any) => void
  stop: () => void
}

const DELAY_RIPPLE = 80

const Ripple = React.forwardRef<RippleRef, RippleProps>((props, ref) => {
  const { clsPrefix: rootClsPrefix } = React.useContext(ConfigContext)
  const {
    clsPrefix = `${rootClsPrefix}-ripple`,
    transitionClasses,
    leaveAfterEnter,
    className,
    ...others
  } = props

  const [ripples, setRipples] = React.useState<Array<React.ReactElement>>([])
  const finishedCountRef = React.useRef(0)
  const waitFinishedCountRef = React.useRef(0)
  const keyRef = React.useRef(0)
  const ignoreMouseDonwRef = React.useRef(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const startTimerRef = React.useRef<NodeJS.Timeout>()

  React.useEffect(() => {
    return () => {
      startTimerRef.current && clearTimeout(startTimerRef.current)
    }
  }, [])

  const startCommit = React.useCallback(
    ({ x, y, size }: { x: number; y: number; size: number }) => {
      const key = keyRef.current
      const styles: React.CSSProperties = {
        width: size,
        height: size,
        top: -size / 2 + y,
        left: -size / 2 + x
      }
      const ripple = <div className={`${clsPrefix}__inner`} key={key} style={styles} />
      setRipples((prev) => [...prev, ripple])
      keyRef.current++
    },
    [clsPrefix]
  )

  const start = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: React.SyntheticEvent | object = {}) => {
      if (startTimerRef.current) {
        clearTimeout(startTimerRef.current)
        startTimerRef.current = undefined
      }

      if ((e as React.MouseEvent).type === 'mousedown' && ignoreMouseDonwRef.current) {
        ignoreMouseDonwRef.current = false
        return
      }

      if ((e as React.TouchEvent).type === 'touchstart') {
        ignoreMouseDonwRef.current = true
      }

      const el = (e as React.UIEvent).currentTarget
        ? ((e as React.UIEvent).currentTarget as HTMLElement)
        : containerRef.current
      const rect = el
        ? el.getBoundingClientRect()
        : {
            left: 0,
            top: 0,
            width: 0,
            height: 0
          }

      const { clientX, clientY } = (e as React.TouchEvent<HTMLDivElement>).touches
        ? (e as TouchEvent).touches[0]
        : (e as MouseEvent)

      const clientWidth = el ? el.clientWidth : 0
      const clientHeight = el ? el.clientHeight : 0
      const x = Math.round(typeof clientX === 'undefined' ? clientWidth / 2 : clientX - rect.left)
      const y = Math.round(typeof clientY === 'undefined' ? clientHeight / 2 : clientY - rect.top)
      const sizeX = Math.max(Math.abs(clientWidth - x), x) * 2 + 2
      const sizeY = Math.max(Math.abs(clientHeight - y), y) * 2 + 2
      const size = Math.round(Math.sqrt(sizeX ** 2 + sizeY ** 2))

      if ((e as React.TouchEvent).touches) {
        startTimerRef.current = setTimeout(() => {
          startCommit({ x, y, size })
        }, DELAY_RIPPLE)
      } else {
        startCommit({ x, y, size })
      }
    },
    [startCommit]
  )

  const stop = useEventCallback(() => {
    if (leaveAfterEnter) {
      if (finishedCountRef.current > 0) {
        setRipples((prev) => prev.slice(1))
        finishedCountRef.current--
        return
      }

      // 当多次触发stop，需要判断是否触发次数过多
      if (ripples.length > 0) {
        waitFinishedCountRef.current++
      }
    } else {
      setRipples((prev) => {
        if (prev.length > 0) {
          return prev.slice(1)
        }
        return prev
      })
    }
  })

  const afterEnter = useEventCallback(() => {
    if (leaveAfterEnter) {
      if (waitFinishedCountRef.current > 0) {
        setRipples((prev) => prev.slice(1))
        waitFinishedCountRef.current--
        return
      }
      finishedCountRef.current++
    }
  })

  React.useImperativeHandle(ref, () => ({
    start,
    stop
  }))

  const classes = classnames(clsPrefix, className)

  return (
    <span {...others} className={classes} ref={containerRef}>
      <TransitionGroup transitionClasses={transitionClasses} afterEnter={afterEnter}>
        {ripples}
      </TransitionGroup>
    </span>
  )
})

Ripple.displayName = 'Ripple'

Ripple.propTypes = {
  clsPrefix: PropTypes.string,
  leaveAfterEnter: PropTypes.bool,
  className: PropTypes.string,
  transitionClasses: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

export default Ripple
