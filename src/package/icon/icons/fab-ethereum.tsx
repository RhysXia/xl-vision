import * as React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 320 512'>
        <path d='M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z'/>
    </svg>
)

const FabEthereum = createIcon(svgElement)

export { IconProps } from '../base/base-icon'

export default FabEthereum