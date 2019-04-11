import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fas-ellipsis-v`
const svgElement = (
    <svg viewBox='0 0 192 512'>
        <path d='M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z'/>
    </svg>
)

const FasEllipsisV = createIcon(svgElement)

FasEllipsisV.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasEllipsisV