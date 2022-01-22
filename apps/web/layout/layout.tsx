import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'
import Header from './Header'
export default function Layout({ children }: LayoutProps): JSX.Element {
  const router = useRouter()
  useEffect(() => {
    const url = router.pathname
    if (url === '/') {
      var children = document.getElementsByTagName('body')[0].children
      const length = children.length
      for (var i = 0; i < length; i++) {
        const child = children[i]
        // console.log('children', child)
        if(child.tagName === 'CANVAS') {
          console.log('canvas', child)
          child.remove()
        }
        
      }
    }
  })
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}
interface LayoutProps {
  children: React.ReactNode
}
