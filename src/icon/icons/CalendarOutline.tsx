/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <rect width='416' height='384' x='48' y='80' fill='none' strokeLinejoin='round' strokeWidth='32' rx='48' ry='48'/><path d='M397.82 80H114.18C77.69 80 48 110.15 48 147.2V208h16c0-16 16-32 32-32h320c16 0 32 16 32 32h16v-60.8c0-37.05-29.69-67.2-66.18-67.2z'/><circle cx='296' cy='232' r='24'/><circle cx='376' cy='232' r='24'/><circle cx='296' cy='312' r='24'/><circle cx='376' cy='312' r='24'/><circle cx='136' cy='312' r='24'/><circle cx='216' cy='312' r='24'/><circle cx='136' cy='392' r='24'/><circle cx='216' cy='392' r='24'/><circle cx='296' cy='392' r='24'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M128 48L128 80'/><path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M384 48L384 80'/>
    </svg>
)

const CalendarOutline = createIcon(svgElement)

CalendarOutline.displayName = 'CalendarOutline'

export { IconProps } from '../base/createIcon'

export default CalendarOutline
