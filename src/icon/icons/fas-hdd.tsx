/* eslint-disable */
import React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

export const displayName = `${namePrefix}-fas-hdd`
const svgElement = (
    <svg viewBox='0 0 576 512'>
        <path d='M576 304v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48zm-48-80a79.557 79.557 0 0130.777 6.165L462.25 85.374A48.003 48.003 0 00422.311 64H153.689a48 48 0 00-39.938 21.374L17.223 230.165A79.557 79.557 0 0148 224h480zm-48 96c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm-96 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z'/>
    </svg>
)

const FasHdd = createIcon(svgElement)

FasHdd.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasHdd
