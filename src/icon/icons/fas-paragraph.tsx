/* eslint-disable */
import React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

export const displayName = `${namePrefix}-fas-paragraph`
const svgElement = (
    <svg viewBox='0 0 448 512'>
        <path d='M448 48v32a16 16 0 01-16 16h-48v368a16 16 0 01-16 16h-32a16 16 0 01-16-16V96h-32v368a16 16 0 01-16 16h-32a16 16 0 01-16-16V352h-32a160 160 0 010-320h240a16 16 0 0116 16z'/>
    </svg>
)

const FasParagraph = createIcon(svgElement)

FasParagraph.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasParagraph
