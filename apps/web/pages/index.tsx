import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Page() {


    

  return (
    <div>
      <ul>
        <li>
          <Link href="/100days/1">Day One</Link>
        </li>
        <li>
          <Link href="/100days/2">Day Two</Link>
        </li>
        <li>
          <Link href="/100days/3">Day Three</Link>
        </li>
        <li>
          <Link href="/100days/4">Day Four</Link>
        </li>
        <li>
          <Link href="/100days/5">Day Five</Link>
        </li>
      </ul>
    </div>
  )
}
