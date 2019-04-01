import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fas-poo-storm`
const svgElement = (
    <svg viewBox='0 0 448 512'>
        <path d='M308 336h-57.7l17.3-64.9c2-7.6-3.7-15.1-11.6-15.1h-68c-6 0-11.1 4.5-11.9 10.4l-16 120c-1 7.2 4.6 13.6 11.9 13.6h59.3l-23 97.2c-1.8 7.6 4 14.8 11.7 14.8 4.2 0 8.2-2.2 10.4-6l88-152c4.6-8-1.2-18-10.4-18zm66.4-111.3c5.9-9.6 9.6-20.6 9.6-32.7 0-35.3-28.7-64-64-64h-5.9c3.6-10.1 5.9-20.7 5.9-32 0-53-43-96-96-96-5.2 0-10.2.7-15.1 1.5C218.3 14.6 224 30.6 224 48c0 44.2-35.8 80-80 80h-16c-35.3 0-64 28.7-64 64 0 12.1 3.7 23.1 9.6 32.7C32.6 228 0 262.2 0 304c0 44 36 80 80 80h48.3c.1-.6 0-1.2 0-1.8l16-120c3-21.8 21.7-38.2 43.7-38.2h68c13.8 0 26.5 6.3 34.9 17.2s11.2 24.8 7.6 38.1l-6.6 24.7h16c15.7 0 30.3 8.4 38.1 22 7.8 13.6 7.8 30.5 0 44l-8.1 14h30c44 0 80-36 80-80 .1-41.8-32.5-76-73.5-79.3z'/>
    </svg>
)

const FasPooStorm = createIcon(svgElement)

FasPooStorm.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasPooStorm
