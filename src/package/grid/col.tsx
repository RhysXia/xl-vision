import classnames from 'classnames'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { clsPrefix } from '../commons/config'
import useMedia, {
  BreakPoint,
  breakPointArray
} from '../commons/hooks/useMedia'
import RowContext from './rowContext'

export type ColSpanType = number | Partial<Record<BreakPoint, number>>

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: ColSpanType
  order?: ColSpanType
  offset?: ColSpanType
  push?: ColSpanType
  pull?: ColSpanType
}

const colClsPrefix = `${clsPrefix}-col`

const Col: React.FunctionComponent<ColProps> = props => {
  const media = useMedia()

  const { className, children, style, ...others } = props
  const spanArray: Partial<keyof typeof others>[] = [
    'span',
    'order',
    'offset',
    'push',
    'pull'
  ]

  const classes = React.useMemo(() => {
    const arr = [colClsPrefix]
    for (const prop of spanArray) {
      const propValue = props[prop]
      if (typeof propValue === 'number') {
        arr.push(`${colClsPrefix}-${prop}-${propValue}`)
      } else if (typeof propValue === 'object') {
        for (const breakPoint of breakPointArray) {
          if (media[breakPoint] && propValue[breakPoint] !== undefined) {
            arr.push(`${colClsPrefix}-${prop}-${propValue[breakPoint]}`)
            break
          }
        }
      }
    }
    return classnames(arr, className)
  }, [media])

  spanArray.forEach(it => {
    delete others[it]
  })
  const context = React.useContext(RowContext)
  const gutter = context.gutter
  const colStyle =
    gutter > 0
      ? {
          paddingLeft: gutter / 2,
          paddingRight: gutter / 2,
          ...style
        }
      : style
  return (
    <div {...others} style={colStyle} className={classes}>
      {children}
    </div>
  )
}

const colSpanValidater = (
  props: ColProps,
  propName: keyof ColProps,
  componentName: string,
  // @ts-ignore
  location: string,
  // @ts-ignore
  propFullName: string
) => {
  const propValue = props[propName]
  if (typeof propValue === 'undefined') {
    return null
  } else if (typeof propValue === 'number') {
    if (propValue < 0 || propValue > 24) {
      return new Error(
        `prop '${propName}' supplied to '${componentName} should be in 0-24 but actually '${propValue}'.`
      )
    }
  } else if (typeof propValue === 'object') {
    for (const breakPoint of breakPointArray) {
      const val = propValue[breakPoint]
      if (val === undefined) {
        continue
      }
      if (typeof val === 'number') {
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
      `prop '${propName}' supplied to '${componentName}' should be a number or suitable object. It can't be '${propValue}'`
    )
  }
  return null
}

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  offset: colSpanValidater,
  order: colSpanValidater,
  pull: colSpanValidater,
  push: colSpanValidater,
  span: colSpanValidater
}

export default Col