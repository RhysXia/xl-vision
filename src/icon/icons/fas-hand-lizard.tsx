/* eslint-disable */
import React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

export const displayName = `${namePrefix}-fas-hand-lizard`
const svgElement = (
    <svg viewBox='0 0 576 512'>
        <path d='M384 480h192V363.778a95.998 95.998 0 00-14.833-51.263L398.127 54.368A48 48 0 00357.544 32H24C10.745 32 0 42.745 0 56v16c0 30.928 25.072 56 56 56h229.981c12.844 0 21.556 13.067 16.615 24.923l-21.41 51.385A32 32 0 01251.648 224H128c-35.346 0-64 28.654-64 64v8c0 13.255 10.745 24 24 24h147.406a47.995 47.995 0 0125.692 7.455l111.748 70.811A24.001 24.001 0 01384 418.539V480z'/>
    </svg>
)

const FasHandLizard = createIcon(svgElement)

FasHandLizard.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasHandLizard
