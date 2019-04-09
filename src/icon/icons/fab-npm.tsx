import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fab-npm`
const svgElement = (
    <svg viewBox='0 0 576 512'>
        <path d='M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z'/>
    </svg>
)

const FabNpm = createIcon(svgElement)

FabNpm.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FabNpm