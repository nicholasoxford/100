import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'
import React, { useEffect } from 'react'
import { days } from '../public/days'
export default function Page() {
  const router = useRouter();

  return (
    <div>
      <ul style={{ 
        listStyle: 'none',
      }}>
        {days.map(day => (
          <li key={day.day}>
            <Link href={`/100days/${day.day}`} passHref >
             <a className='text-xl'> Day {day.day}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
