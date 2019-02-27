import * as React from 'react'
import { BreakPoint, breakPointArray, breakPointMap } from '../common'

// tslint:disable
let enquire: any
if (typeof window !== 'undefined') {
  const matchMediaPolyfill = (mediaQuery: string) => {
    return {
      matches: false,
      media: mediaQuery,
      addListener() { },
      removeListener() { },
      onchange: null,
      addEventListener() { },
      removeEventListener() { },
      dispatchEvent() {
        return true
      }
    }
  }
  window.matchMedia = window.matchMedia || matchMediaPolyfill
  enquire = require('enquire.js')
}
// tslint:enable
const nativeMedia: any = {}
breakPointArray.forEach(it => {
  nativeMedia[it] = false
})
breakPointArray.forEach(breakPoint => {
  enquire.register(breakPointMap[breakPoint], {
    match: () => {
      nativeMedia[breakPoint] = true
    },
    unmatch: () => {
      nativeMedia[breakPoint] = false
    },
    // Keep a empty destory to avoid triggering unmatch when unregister
    // tslint:disable-next-line
    destroy() { }
  })
})

const useMedia = () => {
  const [media, setMedia] = React.useState<Record<BreakPoint, boolean>>({...nativeMedia})

  const resizeHandler = () => {
    setMedia({...nativeMedia})
  }
  if (window) {
    window.addEventListener('resize', resizeHandler)
  }
  React.useEffect(() => {
    return () => {
      if (window) {
        window.removeEventListener('resize', resizeHandler)
      }
    }
  })
  return media
}

export default useMedia
