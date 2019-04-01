import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fas-sort-alpha-up`
const svgElement = (
    <svg viewBox='0 0 448 512'>
        <path d='M107.3 36.7c-6.2-6.2-16.4-6.2-22.6 0l-80 80c-10 10-2.9 27.3 11.3 27.3h48v320c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V144h48c14.2 0 21.4-17.2 11.3-27.3zm293.4 390.4h-61.1c.7-1 1.5-2 2.3-3.1l67.5-95.7c1.4-2 2.2-4.4 2.2-6.9V300c0-6.6-5.4-12-12-12H274.5c-6.6 0-12 5.4-12 12v28.9c0 6.6 5.4 12 12 12H331c-.7 1-1.5 2-2.3 3.1l-67.2 95.2c-1.4 2-2.2 4.4-2.2 6.9V468c0 6.6 5.4 12 12 12h129.4c6.6 0 12-5.4 12-12v-28.9c0-6.7-5.4-12-12-12zm23.5-219l-57.1-168c-1.7-4.9-6.2-8.1-11.4-8.1h-39.6c-5.1 0-9.7 3.3-11.4 8.1l-57.1 168c-2.6 7.8 3.1 15.9 11.4 15.9h35.7c5.4 0 10.1-3.5 11.5-8.7l8.1-28.2h42.9l8.3 28.3A12 12 0 0 0 377 224h35.7c8.4 0 14.2-8.1 11.5-15.9zm-95-71.5l6.8-22.9 6.6 22.9z'/>
    </svg>
)

const FasSortAlphaUp = createIcon(svgElement)

FasSortAlphaUp.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasSortAlphaUp
