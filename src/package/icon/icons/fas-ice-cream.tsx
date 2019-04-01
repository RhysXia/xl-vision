import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fas-ice-cream`
const svgElement = (
    <svg viewBox='0 0 448 512'>
        <path d='M368 160h-.94a144 144 0 1 0-286.12 0H80a48 48 0 0 0 0 96h288a48 48 0 0 0 0-96zM195.38 493.69a31.52 31.52 0 0 0 57.24 0L352 288H96z'/>
    </svg>
)

const FasIceCream = createIcon(svgElement)

FasIceCream.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasIceCream
