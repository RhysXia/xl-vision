import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fas-folder-minus`
const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm-96 168c0 8.84-7.16 16-16 16H160c-8.84 0-16-7.16-16-16v-16c0-8.84 7.16-16 16-16h192c8.84 0 16 7.16 16 16v16z'/>
    </svg>
)

const FasFolderMinus = createIcon(svgElement)

FasFolderMinus.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasFolderMinus