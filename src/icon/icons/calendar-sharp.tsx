/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512' fill='currentColor' stroke='currentColor'>
        <rect width='48' height='48' x='272' y='208' rx='4' ry='4'/><rect width='48' height='48' x='352' y='208' rx='4' ry='4'/><rect width='48' height='48' x='272' y='288' rx='4' ry='4'/><rect width='48' height='48' x='352' y='288' rx='4' ry='4'/><rect width='48' height='48' x='112' y='288' rx='4' ry='4'/><rect width='48' height='48' x='192' y='288' rx='4' ry='4'/><rect width='48' height='48' x='112' y='368' rx='4' ry='4'/><rect width='48' height='48' x='192' y='368' rx='4' ry='4'/><rect width='48' height='48' x='272' y='368' rx='4' ry='4'/><path d='M448 64h-48V32h-40v32H152V32h-40v32H64a32 32 0 00-32 32v352a32 32 0 0032 32h384a32 32 0 0032-32V96a32 32 0 00-32-32zm-12 372H76V176h360z'/>
    </svg>
)

const CalendarSharp = createIcon(svgElement)

CalendarSharp.displayName = 'CalendarSharp'

export { IconProps } from '../base/createIcon'

export default CalendarSharp
