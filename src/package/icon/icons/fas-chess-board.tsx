import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fas-chess-board`
const svgElement = (
    <svg viewBox='0 0 512 512'>
        <path d='M192 256v64h64v-64zm320 64v-64h-64v64zM0 192v64h64v-64zm512 0v-64h-64v64zm0 256v-64h-64v64zM256 256h64v-64h-64zM0 512h64v-64H0zm128 0h64v-64h-64zM384 0h-64v64h64zM128 0H64v64h64zm128 512h64v-64h-64zM0 64v64h64V64zm0 256v64h64v-64zM256 0h-64v64h64zm128 512h64v-64h-64zM64 384v64h64v-64zm256 0v64h64v-64zm-64-192v-64h-64v64zm128 192h64v-64h-64zM128 256H64v64h64zm256 0h64v-64h-64zM512 0h-64v64h64zM128 128H64v64h64zm256-64v64h64V64zM192 384v64h64v-64zm-64-64v64h64v-64zm128 0v64h64v-64zm-64-128h-64v64h64zm128-64V64h-64v64zm-128 0V64h-64v64zm128 64h64v-64h-64zm0 128h64v-64h-64z'/>
    </svg>
)

const FasChessBoard = createIcon(svgElement)

FasChessBoard.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasChessBoard
