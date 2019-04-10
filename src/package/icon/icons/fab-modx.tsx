import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fab-modx`
const svgElement = (
    <svg viewBox='0 0 448 512'>
        <path d='M356 241.8l36.7 23.7V480l-133-83.8L356 241.8zM440 75H226.3l-23 37.8 153.5 96.5L440 75zm-89 142.8L55.2 32v214.5l46 29L351 217.8zM97 294.2L8 437h213.7l125-200.5L97 294.2z'/>
    </svg>
)

const FabModx = createIcon(svgElement)

FabModx.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FabModx