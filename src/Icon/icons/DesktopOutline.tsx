/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <rect width='448' height='320' x='32' y='64' fill='none' strokeLinejoin='round' strokeWidth='32' rx='32' ry='32'/><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M304 448L296 384 216 384 208 448 304 448z'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M368 448L144 448'/><path d='M32 304v48a32.09 32.09 0 0032 32h384a32.09 32.09 0 0032-32v-48zm224 64a16 16 0 1116-16 16 16 0 01-16 16z'/>
    </svg>
)

const DesktopOutline = createIcon(svgElement)

DesktopOutline.displayName = 'DesktopOutline'

export { IconProps } from '../base/createIcon'

export default DesktopOutline
