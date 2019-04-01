import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fas-burn`
const svgElement = (
    <svg viewBox='0 0 384 512'>
        <path d='M192 0C79.7 101.3 0 220.9 0 300.5 0 425 79 512 192 512s192-87 192-211.5c0-79.9-80.2-199.6-192-300.5zm0 448c-56.5 0-96-39-96-94.8 0-13.5 4.6-61.5 96-161.2 91.4 99.7 96 147.7 96 161.2 0 55.8-39.5 94.8-96 94.8z'/>
    </svg>
)

const FasBurn = createIcon(svgElement)

FasBurn.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasBurn
