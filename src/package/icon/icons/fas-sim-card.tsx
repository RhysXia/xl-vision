import * as React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 384 512'>
        <path d='M320 0H128L0 128v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zM160 192h64v64h-64v-64zm-96 32c0-17.7 14.3-32 32-32h32v64H64v-32zm64 224H96c-17.7 0-32-14.3-32-32v-32h64v64zm96 0h-64v-64h64v64zm96-32c0 17.7-14.3 32-32 32h-32v-64h64v32zm0-64H64v-64h256v64zm0-96h-64v-64h32c17.7 0 32 14.3 32 32v32z'/>
    </svg>
)

const FasSimCard = createIcon(svgElement)

export default FasSimCard
