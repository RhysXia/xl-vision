import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fab-buysellads`
const svgElement = (
    <svg viewBox='0 0 448 512'>
        <path d='M224 150.7l42.9 160.7h-85.8L224 150.7zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-65.3 325.3l-94.5-298.7H159.8L65.3 405.3H156l111.7-91.6 24.2 91.6h90.8z'/>
    </svg>
)

const FabBuysellads = createIcon(svgElement)

FabBuysellads.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FabBuysellads
