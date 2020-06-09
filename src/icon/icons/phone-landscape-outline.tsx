/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <rect width='256' height='480' x='128' y='16' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' rx='48' ry='48' transform='rotate(-90 256 256)'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M16 336v-24a8 8 0 018-8h0a16 16 0 0016-16v-64a16 16 0 00-16-16h0a8 8 0 01-8-8v-24'/>
    </svg>
)

const PhoneLandscapeOutline = createIcon(svgElement)

PhoneLandscapeOutline.displayName = 'PhoneLandscapeOutline'

export { IconProps } from '../base/createIcon'

export default PhoneLandscapeOutline
