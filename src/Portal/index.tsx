import PropTypes from 'prop-types'
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactDOM from 'react-dom'
import React from 'react'
import { isServer } from '../commons/utils/env'
import { warning } from '../commons/utils/logger'

export type ContainerReturnType = HTMLElement | string | undefined | null
export type ContainerType = ContainerReturnType | (() => ContainerReturnType)

export interface PortalProp {
  children: React.ReactElement
  getContainer?: ContainerType
}

/**
 * 支持服务端渲染
 * getContainer支持传递父元素，字符串或者undefined,也可以通过函数返回
 * 如果传递字符串，则根据字符串进行查询节点
 * 如果是undefined，则直接挂载在当前位置
 * @param props
 * @constructor
 */
const Portal: React.FunctionComponent<PortalProp> = (props) => {
  const { children, getContainer } = props
  if (isServer) {
    return null
  }

  let container: ContainerType

  if (typeof getContainer === 'function') {
    container = getContainer()
  } else {
    container = getContainer
  }

  if (!container) {
    return children
  }

  if (typeof container === 'string') {
    const selector = document.querySelector(container)
    warning(!selector, '<Portal> querySelector "%s" is null', container)
    return ReactDOM.createPortal(children, selector!)
  }

  return ReactDOM.createPortal(children, container)
}

Portal.displayName = 'Portal'

Portal.propTypes = {
  children: PropTypes.element.isRequired,
  getContainer: PropTypes.any
}

export default Portal
