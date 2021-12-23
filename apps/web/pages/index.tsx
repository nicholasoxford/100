import Link from 'next/link'
import Layout from 'ui/layouts/layout'
import React from 'react'
export default function Page() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/100days/1">Day One</Link>
          <li>
            <Link href="/100days/2">Day Two</Link>
          </li>
          <li>
            <Link href="/100days/3">Day Three</Link>
          </li>
        </li>
      </ul>
    </div>
  )
}
