import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { BreakPoint, breakPointArray } from './useMedia'
import RowContext from './RowContext'
import ConfigContext from '../ConfigProvider/ConfigContext'

export type ColSpanType = number | Partial<Record<BreakPoint, number>>

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
  offset?: ColSpanType
  order?: ColSpanType
  clsPrefix?: string
  pull?: ColSpanType
  push?: ColSpanType
  span: ColSpanType
}

const Col: React.FunctionComponent<ColProps> = (props) => {
  const { media, gutter } = React.useContext(RowContext)

  const { clsPrefix: rootClsPrefix } = React.useContext(ConfigContext)

  const {
    className,
    children,
    style,
    span,
    order,
    offset,
    pull,
    push,
    clsPrefix = `${rootClsPrefix}-col`,
    ...others
  } = props

  const classes = React.useMemo(() => {
    const obj = {
      offset,
      order,
      pull,
      push,
      span
    }
    const arr = [clsPrefix]
    Object.keys(obj).forEach((prop) => {
      const propValue = obj[prop as keyof typeof obj]
      if (typeof propValue === 'number') {
        arr.push(`${clsPrefix}-${prop}-${propValue}`)
      } else if (typeof propValue === 'object') {
        breakPointArray.some((breakPoint) => {
          const value = propValue[breakPoint]
          if (media[breakPoint] && value !== undefined) {
            arr.push(`${clsPrefix}-${prop}-${value}`)
            // 只需要满足最高的条件
            return true
          }
          return false
        })
      }
    })
    return classnames(arr, className)
  }, [media, span, order, offset, pull, push, clsPrefix, className])

  const colStyle =
    gutter > 0
      ? {
          ...style,
          paddingLeft: gutter / 2,
          paddingRight: gutter / 2
        }
      : style

  return (
    <div role='cell' {...others} style={colStyle} className={classes}>
      {children}
    </div>
  )
}

const spanValidator = (props: ColProps, propName: keyof ColProps, componentName: string) => {
  // eslint-disable-next-line react/destructuring-assignment
  const propValue = props[propName] as ColSpanType
  if (typeof propValue === 'undefined') {
    return null
  }
  if (typeof propValue === 'number') {
    if (propValue < 0 || propValue > 24) {
      return new Error(
        `prop '${propName}' supplied to '${componentName} should be in 0-24 but actually '${propValue}'.`
      )
    }
  } else if (typeof propValue === 'object') {
    for (let i = 0; i < breakPointArray.length; i++) {
      const breakPoint = breakPointArray[i]
      const val = propValue[breakPoint]
      if (!val) {
        return null
      }
      if (Number.isInteger(val)) {
        if (propValue < 0 || propValue > 24) {
          return new Error(
            `prop '${propName}' supplied to '${componentName}' is object, its prop '${breakPoint}' be in 0-24 but actually '${val}'.`
          )
        }
      } else {
        return new Error(
          `prop '${propName}' supplied to '${componentName}' is object, its prop '${breakPoint}' should be a number.`
        )
      }
    }
  } else {
    return new Error(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `prop '${propName}' supplied to '${componentName}' should be a integer or suitable object. It's type can't be '${propValue}'`
    )
  }
  return null
}

Col.displayName = 'Col'

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  offset: spanValidator,
  order: spanValidator,
  clsPrefix: PropTypes.string,
  pull: spanValidator,
  push: spanValidator,
  span: spanValidator,
  style: PropTypes.object
}

export default Col
