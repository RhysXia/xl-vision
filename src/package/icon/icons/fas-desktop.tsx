import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fas-desktop`
const svgElement = (
    <svg viewBox='0 0 576 512'>
        <path d='M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z'/>
    </svg>
)

const FasDesktop = createIcon(svgElement)

FasDesktop.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasDesktop
