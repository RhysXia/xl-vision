import * as React from 'react'
import createIcon from '../base/createIcon'

const svgElement = (
    <svg viewBox='0 0 640 512'>
        <path d='M212.9 344.3c3.8-.1 22.8-1.4 25.6-2.2-2.4-2.6-43.6-1-68-49.6-4.3-8.6-7.5-17.6-6.4-27.6 2.9-25.5 32.9-30 52-18.5 36 21.6 63.3 91.3 113.7 97.5 37 4.5 84.6-17 108.2-45.4-.6-.1-.8-.2-1-.1-.4.1-.8.2-1.1.3-33.3 12.1-94.3 9.7-134.7-14.8-37.6-22.8-53.1-58.7-51.8-74.6 1.8-21.3 22.9-23.2 35.9-19.6 14.4 3.9 24.4 17.6 38.9 27.4 15.6 10.4 32.9 13.7 51.3 10.3 14.9-2.7 34.4-12.3 36.5-14.5-1.1-.1-1.8-.1-2.5-.2-6.2-.6-12.4-.8-18.5-1.7C279.8 194.5 262.1 47.4 138.5 37.9 94.2 34.5 39.1 46 2.2 72.9c-.8.6-1.5 1.2-2.2 1.8.1.2.1.3.2.5.8 0 1.6-.1 2.4-.2 6.3-1 12.5-.8 18.7.3 23.8 4.3 47.7 23.1 55.9 76.5 5.3 34.3-.7 50.8 8 86.1 19 77.1 91 107.6 127.7 106.4zM75.3 64.9c-.9-1-.9-1.2-1.3-2 12.1-2.6 24.2-4.1 36.6-4.8-1.1 14.7-22.2 21.3-35.3 6.8zm196.9 350.5c-42.8 1.2-92-26.7-123.5-61.4-4.6-5-16.8-20.2-18.6-23.4l.4-.4c6.6 4.1 25.7 18.6 54.8 27 24.2 7 48.1 6.3 71.6-3.3 22.7-9.3 41-.5 43.1 2.9-18.5 3.8-20.1 4.4-24 7.9-5.1 4.4-4.6 11.7 7 17.2 26.2 12.4 63-2.8 97.2 25.4 2.4 2 8.1 7.8 10.1 10.7-.1.2-.3.3-.4.5-4.8-1.5-16.4-7.5-40.2-9.3-24.7-2-46.3 5.3-77.5 6.2zm174.8-252c16.4-5.2 41.3-13.4 66.5-3.3 16.1 6.5 26.2 18.7 32.1 34.6 3.5 9.4 5.1 19.7 5.1 28.7-.2 0-.4 0-.6.1-.2-.4-.4-.9-.5-1.3-5-22-29.9-43.8-67.6-29.9-50.2 18.6-130.4 9.7-176.9-48-.7-.9-2.4-1.7-1.3-3.2.1-.2 2.1.6 3 1.3 18.1 13.4 38.3 21.9 60.3 26.2 30.5 6.1 54.6 2.9 79.9-5.2zm102.7 117.5c-32.4.2-33.8 50.1-103.6 64.4-18.2 3.7-38.7 4.6-44.9 4.2v-.4c2.8-1.5 14.7-2.6 29.7-16.6 7.9-7.3 15.3-15.1 22.8-22.9 19.5-20.2 41.4-42.2 81.9-39 23.1 1.8 29.3 8.2 36.1 12.7.3.2.4.5.7.9-.5 0-.7.1-.9 0-7-2.7-14.3-3.3-21.8-3.3zm-12.3-24.1c-.1.2-.1.4-.2.6-28.9-4.4-48-7.9-68.5 4-17 9.9-31.4 20.5-62 24.4-27.1 3.4-45.1 2.4-66.1-8-.3-.2-.6-.4-1-.6 0-.2.1-.3.1-.5 24.9 3.8 36.4 5.1 55.5-5.8 22.3-12.9 40.1-26.6 71.3-31 29.6-4.1 51.3 2.5 70.9 16.9zM268.6 97.3c-.6-.6-1.1-1.2-2.1-2.3 7.6 0 29.7-1.2 53.4 8.4 19.7 8 32.2 21 50.2 32.9 11.1 7.3 23.4 9.3 36.4 8.1 4.3-.4 8.5-1.2 12.8-1.7.4-.1.9 0 1.5.3-.6.4-1.2.9-1.8 1.2-8.1 4-16.7 6.3-25.6 7.1-26.1 2.6-50.3-3.7-73.4-15.4-19.3-9.9-36.4-22.9-51.4-38.6zM640 335.7c-3.5 3.1-22.7 11.6-42.7 5.3-12.3-3.9-19.5-14.9-31.6-24.1-10-7.6-20.9-7.9-28.1-8.4.6-.8.9-1.2 1.2-1.4 14.8-9.2 30.5-12.2 47.3-6.5 12.5 4.2 19.2 13.5 30.4 24.2 10.8 10.4 21 9.9 23.1 10.5.1-.1.2 0 .4.4zm-212.5 137c2.2 1.2 1.6 1.5 1.5 2-18.5-1.4-33.9-7.6-46.8-22.2-21.8-24.7-41.7-27.9-48.6-29.7.5-.2.8-.4 1.1-.4 13.1.1 26.1.7 38.9 3.9 25.3 6.4 35 25.4 41.6 35.3 3.2 4.8 7.3 8.3 12.3 11.1z'/>
    </svg>
)

const FabPhoenixFramework = createIcon(svgElement)

export default FabPhoenixFramework
