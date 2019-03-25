import * as React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M480 128h-32V80c0-8.84-7.16-16-16-16h-96c-8.84 0-16 7.16-16 16v48H192V80c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v48H32c-17.67 0-32 14.33-32 32v256c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32zM192 264c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16zm256 0c0 4.42-3.58 8-8 8h-40v40c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-40h-40c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h40v-40c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v40h40c4.42 0 8 3.58 8 8v16z'/>
    </svg>
)

const FasCarBattery = createIcon(svgElement)

export default FasCarBattery
