import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fas-backward`
const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M11.5 280.6l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2zm256 0l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2z'/>
    </svg>
)

const FasBackward = createIcon(svgElement)

FasBackward.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasBackward
