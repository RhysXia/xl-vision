/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M2 377.4l43 74.3A51.35 51.35 0 0090.9 480h285.4l-59.2-102.6zM501.8 350L335.6 59.3A51.38 51.38 0 00290.2 32h-88.4l257.3 447.6 40.7-70.5c1.9-3.2 21-29.7 2-59.1zM275 304.5l-115.5-200L44 304.5z'/>
    </svg>
)

const FabArtstation = createIcon(svgElement)

FabArtstation.displayName = 'FabArtstation'

export { IconProps } from '../base/createIcon'

export default FabArtstation