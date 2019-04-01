import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fab-microsoft`
const svgElement = (
    <svg viewBox='0 0 448 512'>
        <path d='M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z'/>
    </svg>
)

const FabMicrosoft = createIcon(svgElement)

FabMicrosoft.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FabMicrosoft
