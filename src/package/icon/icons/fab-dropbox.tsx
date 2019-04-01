import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fab-dropbox`
const svgElement = (
    <svg viewBox='0 0 528 512'>
        <path d='M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z'/>
    </svg>
)

const FabDropbox = createIcon(svgElement)

FabDropbox.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FabDropbox
