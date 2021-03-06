import { useEffect, useRef, DependencyList } from 'react'

const useUpdated = (update: () => void, dependencies?: DependencyList) => {
  const updateRef = useRef(false)

  useEffect(() => {
    if (updateRef.current) {
      update()
    } else {
      updateRef.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)
}

export default useUpdated
