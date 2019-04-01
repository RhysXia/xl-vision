import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fas-ellipsis-h`
const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z'/>
    </svg>
)

const FasEllipsisH = createIcon(svgElement)

FasEllipsisH.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasEllipsisH
