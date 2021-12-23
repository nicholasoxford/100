import React from 'react'
import Header from 'UI/components/Header'
export default function Layout({ children }: LayoutProps): JSX.Element {
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
