import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-far-folder`
const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M464 128H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm0 272H48V112h140.12l54.63 54.63c6 6 14.14 9.37 22.63 9.37H464v224z'/>
    </svg>
)

const FarFolder = createIcon(svgElement)

FarFolder.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FarFolder
