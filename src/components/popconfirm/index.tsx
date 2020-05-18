import PropTypes from 'prop-types'
import React from 'react'
import Button from '../button'
import { clsPrefix } from '../commons/config'
import { FasExclamationCircle } from '../icon'
import Tooltip, { TooltipProps } from '../tooltip'

// popconfirm不应该不允许进入
export interface PopconfirmProps extends Omit<TooltipProps, 'allowPopupEnter'> {
  cancelText?: string
  cancelType?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'text'
  confirmText?: string
  confirmType?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'text'
  content: React.ReactNode
  icon?: React.ReactNode
  onCancel?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  onConfirm?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}

const Popconfirm: React.FunctionComponent<PopconfirmProps> = (props) => {
  const {
    content,
    confirmText = 'Yes',
    confirmType = 'primary',
    cancelText = 'No',
    cancelType = 'default',
    onConfirm,
    onCancel,
    prefixCls = `${clsPrefix}-popconfirm`,
    visible,
    trigger = 'click',
    onVisibleChange,
    ...others
  } = props

  const [actualVisible, setActualVisible] = React.useState(visible)

  const icon = others.icon || <FasExclamationCircle className={`${prefixCls}__icon`} />

  delete others.icon

  React.useEffect(() => {
    setActualVisible(visible)
  }, [visible])

  const onVisibleChangeWrapper = React.useCallback(
    (visible: boolean) => {
      setActualVisible(visible)
      onVisibleChange && onVisibleChange(visible)
    },
    [onVisibleChange]
  )

  const onConfirmWrapper = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      onConfirm && onConfirm(e)
      setActualVisible(false)
    },
    [onConfirm]
  )

  const onCancelWrapper = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      onCancel && onCancel(e)
      setActualVisible(false)
    },
    [onCancel]
  )

  const contentNode = (
    <>
      <div className={`${prefixCls}__message`}>
        {icon}
        <span className={`${prefixCls}__content`}>{content}</span>
      </div>
      <div className={`${prefixCls}__action`}>
        <Button
          size={'small'}
          className={`${prefixCls}__btn`}
          type={confirmType}
          onClick={onConfirmWrapper}
        >
          {confirmText}
        </Button>
        <Button
          size={'small'}
          className={`${prefixCls}__btn`}
          type={cancelType}
          onClick={onCancelWrapper}
        >
          {cancelText}
        </Button>
      </div>
    </>
  )

  return (
    <Tooltip
      {...others}
      trigger={trigger}
      onVisibleChange={onVisibleChangeWrapper}
      visible={actualVisible}
      content={contentNode}
      prefixCls={prefixCls}
      // 必须允许进入
      allowPopupEnter={true}
    />
  )
}

Popconfirm.propTypes = {
  cancelText: PropTypes.string,
  cancelType: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'error', 'text']),
  confirmText: PropTypes.string,
  confirmType: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'error', 'text']),
  content: PropTypes.node.isRequired,
  icon: PropTypes.node,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func
}

export default Popconfirm
