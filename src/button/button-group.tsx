import classnames from 'classnames'
import PropTypes from 'prop-types'
import * as React from 'react'
import { namePrefix } from '../commons/config'
import { ButtonProps } from './button'

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement<ButtonProps> | React.ReactElement<ButtonProps>[]
  round?: boolean
  vertical?: boolean
}

export const displayName = `${namePrefix}-button-group`

const ButtonGroup: React.FunctionComponent<ButtonGroupProps> = props => {
  const { round, vertical, className, ...others } = props
  const classes = classnames({
    [displayName]: true,
    [`${displayName}--horizontal`]: !vertical,
    [`${displayName}--vertical`]: vertical,
    [`${displayName}--round`]: round
  }, className)

  return (
    <div className={classes} {...others}/>
  )
}

ButtonGroup.displayName = displayName

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.arrayOf(PropTypes.element.isRequired)]).isRequired,
  round: PropTypes.bool,
  vertical: PropTypes.bool
}

export default React.memo(ButtonGroup)
