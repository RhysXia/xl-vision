import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { CssTransition } from '..'
import { clsPrefix } from '../commons/config'
import { FasSpinner } from '../icon'

export type SpinSize = 'small' | 'default' | 'large'

export type SpinIndicator = React.ReactElement<React.HTMLAttributes<HTMLElement>>

export interface SpinProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  cover?: boolean
  delay?: number
  indicator?: SpinIndicator
  prefixCls?: string
  size?: SpinSize
  spinning?: boolean
  tip?: string
  wrapperClassName?: string
}

const Spin: React.FunctionComponent<SpinProps> = (props) => {
  const {
    className,
    children,
    cover,
    delay,
    indicator,
    size = 'default',
    spinning = true,
    tip = 'loading',
    wrapperClassName,
    prefixCls = `${clsPrefix}-spin`,
    ...others
  } = props

  const [display, setDisplay] = React.useState(false)

  React.useEffect(() => {
    let timer: NodeJS.Timeout

    if (delay && spinning) {
      timer = setTimeout(() => setDisplay(spinning), delay)
    } else {
      setDisplay(spinning)
    }
    return () => clearTimeout(timer)
  }, [delay, spinning])

  const classes = classnames(
    {
      [prefixCls]: true,
      [`${prefixCls}--spinning`]: display,
      [`${prefixCls}--cover`]: cover,
      [`${prefixCls}--nested`]: !!children
    },
    className
  )

  const wrapperClasses = classnames(
    `${prefixCls}__wrap`,
    `${prefixCls}__wrap--${size}`,
    wrapperClassName
  )

  const childrenEle = children && <div className={`${prefixCls}__children`}>{children}</div>

  return (
    <div {...others} className={classes}>
      <CssTransition show={display} classNames={`${prefixCls}--fade`}>
        <div className={`${prefixCls}--fade`}>
          <div className={wrapperClasses}>
            <span className={`${prefixCls}__indicator`}>{renderIndicator(indicator)}</span>
            {tip && <span className={`${prefixCls}__tip`}>{tip}</span>}
          </div>
        </div>
      </CssTransition>
      {childrenEle}
    </div>
  )
}

Spin.propTypes = {
  children: PropTypes.node,
  cover: PropTypes.bool,
  delay: PropTypes.number,
  indicator: PropTypes.element,
  prefixCls: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  spinning: PropTypes.bool,
  tip: PropTypes.string,
  wrapperClassName: PropTypes.string
}

export default Spin

const renderIndicator = (indicator?: SpinIndicator) => {
  return indicator || <FasSpinner spin={true} />
}