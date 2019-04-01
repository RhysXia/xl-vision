import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fab-magento`
const svgElement = (
    <svg viewBox='0 0 448 512'>
        <path d='M445.7 127.9V384l-63.4 36.5V164.7L223.8 73.1 65.2 164.7l.4 255.9L2.3 384V128.1L224.2 0l221.5 127.9zM255.6 420.5L224 438.9l-31.8-18.2v-256l-63.3 36.6.1 255.9 94.9 54.9 95.1-54.9v-256l-63.4-36.6v255.9z'/>
    </svg>
)

const FabMagento = createIcon(svgElement)

FabMagento.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FabMagento
