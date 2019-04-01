import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fab-hacker-news`
const svgElement = (
    <svg viewBox='0 0 448 512'>
        <path d='M0 32v448h448V32H0zm21.2 197.2H21c.1-.1.2-.3.3-.4 0 .1 0 .3-.1.4zm218 53.9V384h-31.4V281.3L128 128h37.3c52.5 98.3 49.2 101.2 59.3 125.6 12.3-27 5.8-24.4 60.6-125.6H320l-80.8 155.1z'/>
    </svg>
)

const FabHackerNews = createIcon(svgElement)

FabHackerNews.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FabHackerNews
