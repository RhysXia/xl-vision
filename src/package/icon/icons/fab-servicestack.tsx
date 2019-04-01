import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fab-servicestack`
const svgElement = (
    <svg viewBox='0 0 496 512'>
        <path d='M88 216c81.7 10.2 273.7 102.3 304 232H0c99.5-8.1 184.5-137 88-232zm32-152c32.3 35.6 47.7 83.9 46.4 133.6C249.3 231.3 373.7 321.3 400 448h96C455.3 231.9 222.8 79.5 120 64z'/>
    </svg>
)

const FabServicestack = createIcon(svgElement)

FabServicestack.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FabServicestack
