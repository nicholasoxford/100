import { useRouter } from 'next/dist/client/router'
import React, { useCallback, useEffect, useState } from 'react'
import Header from './Header'
export default function Layout({ children }: LayoutProps): JSX.Element {
  // figure out screen width and set state accordingly
  // we pass this down to the header component
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
  // the width we care about
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
      <>
        <style jsx global>{`
          body {
            margin: 0px;
            padding: 0px;
          }
        `}</style>
      </>
      <Header isBreak={isLessThanBreakPoint} />
      <main
        style={{
          paddingLeft: isLessThanBreakPoint ? '5vw' : '25vw',
          fontFamily: 'IBM Plex Sans',
          paddingTop: isLessThanBreakPoint ? '2vh' : null,
          justifyContent: 'center'
        }}
      >
        {children}
      </main>
    </div>
  )
}
interface LayoutProps {
  children: React.ReactNode
}
