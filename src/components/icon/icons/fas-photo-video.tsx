/* eslint-disable */
import React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 640 512'>
        <path d='M608 0H160a32 32 0 00-32 32v96h160V64h192v320h128a32 32 0 0032-32V32a32 32 0 00-32-32zM232 103a9 9 0 01-9 9h-30a9 9 0 01-9-9V73a9 9 0 019-9h30a9 9 0 019 9zm352 208a9 9 0 01-9 9h-30a9 9 0 01-9-9v-30a9 9 0 019-9h30a9 9 0 019 9zm0-104a9 9 0 01-9 9h-30a9 9 0 01-9-9v-30a9 9 0 019-9h30a9 9 0 019 9zm0-104a9 9 0 01-9 9h-30a9 9 0 01-9-9V73a9 9 0 019-9h30a9 9 0 019 9zm-168 57H32a32 32 0 00-32 32v288a32 32 0 0032 32h384a32 32 0 0032-32V192a32 32 0 00-32-32zM96 224a32 32 0 11-32 32 32 32 0 0132-32zm288 224H64v-32l64-64 32 32 128-128 96 96z'/>
    </svg>
)

const FasPhotoVideo = createIcon(svgElement)

FasPhotoVideo.displayName = 'FasPhotoVideo'

export { IconProps } from '../base/createIcon'

export default FasPhotoVideo