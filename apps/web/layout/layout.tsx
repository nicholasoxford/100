import { useRouter } from 'next/dist/client/router'
import React, { useCallback, useEffect, useState } from 'react'
import Header from './Header'
export default function Layout({ children }: LayoutProps): JSX.Element {
  const useMediaQuery = width => {
    const [targetReached, setTargetReached] = useState(false)

    const updateTarget = useCallback(e => {
      if (e.matches) {
        setTargetReached(true)
      } else {
        setTargetReached(false)
      }
    }, [])

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`)

      media.addEventListener('change', updateTarget)
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true)
      }

      return () => media.removeEventListener('change', updateTarget)
    }, [updateTarget, width])

    return targetReached
  }
  const isLessThanBreakPoint = useMediaQuery(768)

  const router = useRouter()
  useEffect(() => {
    const url = router.pathname
    // The canvases were sticking around in the DOM so we had to handle them
    // if we navigate home, we find all canvas elements and remove them
    if (url === '/') {
      var children = document.getElementsByTagName('body')[0].children
      const length = children.length
      for (var i = 0; i < length; i++) {
        const child = children[i]
        if (child.tagName === 'CANVAS') {
          child.remove()
        }
      }
    }
  })
  return (
    <div>
      <Header isBreak={isLessThanBreakPoint} />
      <main style={{ paddingLeft: isLessThanBreakPoint ? '40px' : '100px', fontFamily: 'IBM Plex Sans' }}>
        {children}
      </main>
    </div>
  )
}
interface LayoutProps {
  children: React.ReactNode
}
