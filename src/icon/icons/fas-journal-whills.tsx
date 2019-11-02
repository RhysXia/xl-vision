/* eslint-disable */
import React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

export const displayName = `${namePrefix}-fas-journal-whills`
const svgElement = (
    <svg viewBox='0 0 448 512'>
        <path d='M448 358.4V25.6c0-16-9.6-25.6-25.6-25.6H96C41.6 0 0 41.6 0 96v320c0 54.4 41.6 96 96 96h326.4c12.8 0 25.6-9.6 25.6-25.6v-16c0-6.4-3.2-12.8-9.6-19.2-3.2-16-3.2-60.8 0-73.6 6.4-3.2 9.6-9.6 9.6-19.2zM133.08 144.39l21.26 21.26c1.56 1.56 3.61 2.34 5.66 2.34s4.09-.78 5.66-2.34c3.12-3.12 3.12-8.19 0-11.31l-26.42-26.42c10-20.9 26.24-37.97 46.37-49.26C179.62 88.4 176 99.74 176 112c0 19.96 9.33 37.57 23.66 49.31C190.01 171.37 184 184.96 184 200c0 26.94 19.04 49.4 44.38 54.76l1.36-32.71-10.37 7.04c-.69.45-1.47.69-2.25.69-1 0-1.98-.38-2.75-1.09a4.006 4.006 0 01-.69-4.95l8.54-14.31-17.91-3.72c-1.86-.39-3.19-2.03-3.19-3.92s1.33-3.53 3.19-3.92l17.91-3.72-8.54-14.31c-.95-1.61-.67-3.67.69-4.95 1.36-1.3 3.44-1.44 5-.41l12.01 8.16L236 71.83c.09-2.14 1.86-3.83 4-3.83s3.91 1.69 4 3.83l4.68 112.29 14.2-9.65a4.067 4.067 0 015 .41 4.006 4.006 0 01.69 4.95l-8.54 14.31 17.91 3.72c1.86.39 3.19 2.03 3.19 3.92s-1.33 3.53-3.19 3.92l-17.91 3.72 8.54 14.31c.95 1.61.67 3.67-.69 4.95-.77.72-1.77 1.09-2.75 1.09-.78 0-1.56-.23-2.25-.69l-12.68-8.62 1.43 34.28C276.96 249.4 296 226.94 296 200c0-15.04-6.01-28.63-15.66-38.69C294.67 149.57 304 131.96 304 112c0-12.26-3.62-23.6-9.6-33.33 20.13 11.28 36.37 28.36 46.37 49.26l-26.42 26.42c-3.12 3.12-3.12 8.19 0 11.31 1.56 1.56 3.61 2.34 5.66 2.34s4.09-.78 5.66-2.34l21.26-21.26c2.97 10.08 5.07 20.55 5.07 31.6 0 .52-.14.99-.15 1.51l-37.11 32.47a7.975 7.975 0 00-.75 11.28 7.97 7.97 0 006.02 2.73c1.88 0 3.75-.66 5.27-1.98l23.59-20.64C337.32 250.96 293.09 288 240 288s-97.32-37.04-108.86-86.62l23.59 20.64A7.957 7.957 0 00160 224c2.22 0 4.44-.92 6.02-2.73 2.92-3.33 2.58-8.38-.75-11.28l-37.11-32.47c-.01-.52-.15-.99-.15-1.51-.01-11.06 2.09-21.53 5.07-31.62zM380.8 448H96c-19.2 0-32-12.8-32-32s16-32 32-32h284.8v64z'/>
    </svg>
)

const FasJournalWhills = createIcon(svgElement)

FasJournalWhills.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FasJournalWhills
