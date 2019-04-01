import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fab-fulcrum`
const svgElement = (
    <svg viewBox='0 0 320 512'>
        <path d='M95.75 164.14l-35.38 43.55L25 164.14l35.38-43.55zM144.23 0l-20.54 198.18L72.72 256l51 57.82L144.23 512V300.89L103.15 256l41.08-44.89zm79.67 164.14l35.38 43.55 35.38-43.55-35.38-43.55zm-48.48 47L216.5 256l-41.08 44.89V512L196 313.82 247 256l-51-57.82L175.42 0z'/>
    </svg>
)

const FabFulcrum = createIcon(svgElement)

FabFulcrum.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FabFulcrum
