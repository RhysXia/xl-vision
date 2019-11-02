/* eslint-disable */
import React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

export const displayName = `${namePrefix}-fas-text-height`
const svgElement = (
    <svg viewBox='0 0 576 512'>
        <path d='M304 32H16A16 16 0 000 48v96a16 16 0 0016 16h32a16 16 0 0016-16v-32h56v304H80a16 16 0 00-16 16v32a16 16 0 0016 16h160a16 16 0 0016-16v-32a16 16 0 00-16-16h-40V112h56v32a16 16 0 0016 16h32a16 16 0 0016-16V48a16 16 0 00-16-16zm256 336h-48V144h48c14.31 0 21.33-17.31 11.31-27.31l-80-80a16 16 0 00-22.62 0l-80 80C379.36 126 384.36 144 400 144h48v224h-48c-14.31 0-21.32 17.31-11.31 27.31l80 80a16 16 0 0022.62 0l80-80C580.64 386 575.64 368 560 368z'/>
    </svg>
)

const FasTextHeight = createIcon(svgElement)

FasTextHeight.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasTextHeight
