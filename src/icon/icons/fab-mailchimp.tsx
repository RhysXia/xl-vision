import * as React from 'react'
import { namePrefix } from '../../commons/config'
import createIcon from '../base/createIcon'

const displayName = `${namePrefix}-fab-mailchimp`
const svgElement = (
    <svg viewBox='0 0 448 512'>
        <path d='M232.7 73.1l-10-8.4 3.6 12.6c2-1.4 4.2-2.8 6.4-4.2zM110.9 314.3a4.31 4.31 0 0 1-1.7-2.4c-.4-1.8-.2-2.9 1.4-4 1.2-.8 2.2-1.2 2.2-1.7 0-1-4-2-6.8.8a8.68 8.68 0 0 0 .7 11.7c4.2 4.5 10.6 5.5 11.6 11.2a21.12 21.12 0 0 1 .2 2.6 16.21 16.21 0 0 1-.3 2.5c-1.2 5.4-6.4 10.6-14.9 9.3-1.6-.2-2.6-.4-2.9 0-.7.9 3 5.1 9.7 4.9 9.5-.2 17.4-9.9 15.5-20.7-1.9-9.5-11.2-11.5-14.7-14.2zm4.5-10.4c2.4 3.4 1.6 5.3 2.6 6.3a1.06 1.06 0 0 0 1.4.2c1.3-.6 2-2.7 2.1-4.2.3-3.6-1.6-7.7-4.1-10.5a24.19 24.19 0 0 0-14.3-7.7 30.67 30.67 0 0 0-12.1.7 23.35 23.35 0 0 0-2.5.7C74.1 295 67.9 309 70.9 323c.7 3.4 2.2 7.2 4.6 9.7 2.9 3.2 6.2 2.6 4.8-.4a25.81 25.81 0 0 1-2.3-10.2c-.2-6.2 1.2-12.7 5.2-17.7a23.8 23.8 0 0 1 7-5.5 7.74 7.74 0 0 1 1.6-.7 2.35 2.35 0 0 1 .8-.2 25 25 0 0 1 2.6-.7c9.8-2.2 17 2.1 20.2 6.6zm96.3-235.4l-4.9-17.7-2.9 8.8 1.7 6.9zm10.7 11.6l-20.6-6.3 13.6 11.4c2-1.5 4.3-3.3 7-5.1zm91.4 185.3c3.5 2 7.6 1.4 9-1.2s-.3-6.3-3.9-8.2-7.6-1.4-9 1.2.4 6.3 3.9 8.2zm-37.7-1.7c2.5.2 4.2.3 4.6-.4.9-1.5-5.8-6.5-14.9-5a29.92 29.92 0 0 0-3.2.8 3.58 3.58 0 0 0-1.1.4 18.83 18.83 0 0 0-6.1 3.8c-2.2 2.1-2.8 4-2.1 4.5s2.1-.2 4.4-1.2a36.59 36.59 0 0 1 18.4-2.9zm160.5 59.9a23.8 23.8 0 0 0-16.3-12.9 67.48 67.48 0 0 0-6.2-17.6c1.3-1.5 2.6-3 2.8-3.3 10.4-12.9 3.6-31.9-14.2-36.3-10-9.6-19.1-14.2-26.5-17.9-7.1-3.6-4.3-2.2-11-5.2-1.8-8.7-2.4-29-5.2-43.2-2.5-12.8-7.7-22.1-15.6-28.1-3.2-6.8-7.6-13.7-12.9-18.8 24.8-38.1 31.4-75.7 13.2-95.4-8.1-8.8-20.1-12.9-34.5-12.9-20.3 0-45.2 8.3-70.3 23.5 0 0-16.4-13.2-16.7-13.5C153-13.2-45.2 230.7 24.7 284l18.1 13.8c-11.3 31.5 4.4 69.1 37.3 81.2a56.71 56.71 0 0 0 23.3 3.5s53.1 97.4 165.1 97.4c129.6 0 162.5-126.7 162.9-127.9 0 0 10.5-15.5 5.2-28.4zM30.1 267.8c-14.2-24 10.5-73.2 28.1-101.2C101.7 97.5 174 43 206.8 50.7l9-3.5s24.7 20.8 24.7 20.9c17-10.2 38.6-20.6 58.8-22.6-12.3 2.8-27.3 9.2-45.1 20-.4.2-42 28.3-67.4 53.5-13.8 13.7-69.5 80.4-69.4 80.3 10.2-19.2 16.9-28.7 32.9-48.9 9.1-11.4 18.8-22.6 28.7-32.8 4.6-4.8 9.3-9.4 13.9-13.7 3.2-3 6.4-5.9 9.7-8.6 1.5-1.3 3-2.5 4.4-3.7l-32.6-26.9 1.7 12.1L200 97.6s-21 14.1-31.4 23c-41.8 35.7-82.8 90.4-98.1 143.7h.7c-7.6 4.2-15.1 10.9-21.7 20-.1 0-17-12.4-19.4-16.5zm69.1 100.1c-25 0-45.3-21.4-45.3-47.7s20.3-47.7 45.3-47.7a42.53 42.53 0 0 1 18.2 4s9.6 4.9 12.3 27.8a111.07 111.07 0 0 0 4.2-13.1 82.38 82.38 0 0 1 4.2 30.8c2.7-3.6 5.5-10.3 5.5-10.3 5.2 29.4-16.2 56.2-44.4 56.2zM155 199.4s19.5-37.1 62.3-61.6c-3.2-.5-11 .5-12.4.6 7.8-6.7 22.2-11.2 32.2-13.2-2.9-1.9-9.9-2.3-13.3-2.4h-2.2c9.4-5.2 26.8-8.3 42.7-5.5-2-2.6-6.5-4.6-9.7-5.5-.3-.1-1.5-.4-1.5-.4l1.2-.3c9.5-1.8 20.7.1 29.5 3.7-1-2.3-3.5-5-5.3-6.7-.2-.2-1.3-1-1.3-1a69.13 69.13 0 0 1 24.7 10.5 30.36 30.36 0 0 0-4.7-6.3c8.8 2.5 18.7 8.8 23 17.8a6.89 6.89 0 0 1 .4 1c-16.7-12.8-65.4-9.2-114.2 22.4-22.4 14.6-38.7 30.4-51.4 46.9zm263.4 146.3c-.6 1.2-6.7 34.4-41.9 62-44.4 34.9-102.7 31.3-124.7 11.8-11.8-11-16.9-26.7-16.9-26.7s-1.3 8.9-1.6 12.3c-8.9-15.1-8.1-33.5-8.1-33.5s-4.7 8.8-6.9 13.8c-6.5-16.6-3.2-33.8-3.2-33.8l-5.2 7.7s-2.4-18.8 3.5-34.5c6.4-16.7 18.7-28.9 21.1-30.4-9.4-3-20.1-11.5-20.1-11.5a30.21 30.21 0 0 0 7.3-.4s-18.9-13.5-22.2-34.3c2.7 3.4 8.5 7.2 8.5 7.2-1.9-5.4-3-17.5-1.2-29.4 3.6-22.7 22.3-37.4 43.4-37.3 22.5.2 37.7 4.9 56.6-12.5 4-3.7 7.2-6.9 12.8-8.1a17.25 17.25 0 0 1 13.8 1.5c10.2 6.1 12.5 22 13.6 33.7 4.1 43.3 2.4 35.6 19.9 44.5 8.4 4.2 17.7 8.3 28.4 19.7l.1.1h.1c9 .2 13.6 7.3 9.5 12.5-30.2 36.1-72.5 53.4-119.5 54.8-1.9 0-6.3.1-6.3.1-19 .6-25.2 25.2-13.3 40 7.5 9.4 22 12.4 34 12.5l.2-.1c51.5 1 103.1-35.4 112.1-55.4.1-.2.6-1.4.6-1.4-2.1 2.4-52.2 49.6-113.1 47.9a67.44 67.44 0 0 1-12.9-1.6c-8.3-1.9-14.5-5.6-17-13.8a98.53 98.53 0 0 0 18.9 1.7c44 0 75.6-20 72.3-20.2a1.09 1.09 0 0 0-.5.1c-5.1 1.2-58 21.7-91.4 11.2a13.52 13.52 0 0 1 .5-2.9c3-10 8.2-8.6 16.8-8.9a185.12 185.12 0 0 0 73.5-17.4c19.6-9.3 34.6-21.3 40-27.4 7 11.8 7 26.9 7 26.9a20.25 20.25 0 0 1 6.4-1c11.3 0 13.7 10.2 5.1 20.5zM269 358.9zm.7 4.1c0-.1-.1-.1-.1-.2 0 .1 0 .1.1.2 0-.1-.1-.2-.1-.4 0 .2 0 .3.1.4zm62.9-110.4c-.5 3.5 1.1 6.7 3.7 7.1s5.1-2.1 5.7-5.7-1.1-6.7-3.7-7.1-5.1 2.2-5.7 5.7zm-58-1.2c4 1.6 6.8 2.8 7.5 1.9.4-.4.1-1.5-.8-2.9-2.5-3.7-7.3-6.8-11.6-8.4a30.66 30.66 0 0 0-29.5 5.1c-4.1 3.4-6 6.8-4.1 7.1 1.2.2 3.6-.8 7-2.1 13.5-5.1 21.1-4.5 31.5-.7zm46.7-29.2a43 43 0 0 0 2.1 11.7 27.11 27.11 0 0 1 14.5 2.6c-.3-12.3-7.5-26.2-12.9-24.3-3.2 1.1-3.8 6.6-3.7 10z'/>
    </svg>
)

const FabMailchimp = createIcon(svgElement)

FabMailchimp.displayName = displayName

export { IconProps } from '../base/createIcon'

export default FabMailchimp