import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fas-chalkboard`
const svgElement = (
    <svg viewBox='0 0 640 512'>
        <path d='M96 64h448v352h64V40c0-22.06-17.94-40-40-40H72C49.94 0 32 17.94 32 40v376h64V64zm528 384H480v-64H288v64H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z'/>
    </svg>
)

const FasChalkboard = createIcon(svgElement)

FasChalkboard.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasChalkboard
