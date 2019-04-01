import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fab-bluetooth`
const svgElement = (
    <svg viewBox='0 0 448 512'>
        <path d='M292.6 171.1L249.7 214l-.3-86 43.2 43.1m-43.2 219.8l43.1-43.1-42.9-42.9-.2 86zM416 259.4C416 465 344.1 512 230.9 512S32 465 32 259.4 115.4 0 228.6 0 416 53.9 416 259.4zm-158.5 0l79.4-88.6L211.8 36.5v176.9L138 139.6l-27 26.9 92.7 93-92.7 93 26.9 26.9 73.8-73.8 2.3 170 127.4-127.5-83.9-88.7z'/>
    </svg>
)

const FabBluetooth = createIcon(svgElement)

FabBluetooth.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FabBluetooth
