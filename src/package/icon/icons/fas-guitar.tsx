import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fas-guitar`
const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M502.6 54.6L457.4 9.4c-12.5-12.5-32.8-12.5-45.3 0l-67.9 67.9c-12.5 12.5-12.5 32.8 0 45.3L290 176.7c-45.4-29-100.4-28.9-133.5 4.2-9.7 9.7-16.4 21.2-20.5 33.9-6.1 18.8-23.5 33.1-42.7 34.9-24 2.3-46.3 11.6-63.4 28.8C-16.3 324.6-8 407.6 48.2 463.8c56.2 56.2 139.2 64.4 185.3 18.3 17.2-17.1 26.5-39.4 28.8-63.5 1.8-19.1 16.1-36.6 34.9-42.7 12.7-4.1 24.2-10.8 33.9-20.5 33.1-33.1 33.1-88.1 4.2-133.5l54.2-54.2c12.5 12.5 32.8 12.5 45.3 0l67.9-67.9c12.4-12.4 12.4-32.7-.1-45.2zM208 352c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z'/>
    </svg>
)

const FasGuitar = createIcon(svgElement)

FasGuitar.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasGuitar
