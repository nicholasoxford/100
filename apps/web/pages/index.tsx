import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { days } from '../public/days'

export default function Page() {
  const router = useRouter()

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <h1>Nicholas Oxford</h1>
        <h2>Personal Site</h2>
      </div>
      <ul
        style={{
          listStyle: 'none'
        }}
      >
        {days.map(day => (
          <li key={day.day}>
            <Link href={`/100days/${day.day}`} passHref>
              <a style={{ textDecoration: 'underline', color: 'blue' }}> Day {day.day}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
