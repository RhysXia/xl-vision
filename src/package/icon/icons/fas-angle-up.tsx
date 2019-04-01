import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fas-angle-up`
const svgElement = (
    <svg viewBox='0 0 320 512'>
        <path d='M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z'/>
    </svg>
)

const FasAngleUp = createIcon(svgElement)

FasAngleUp.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasAngleUp
