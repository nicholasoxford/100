import Link from 'next/link'
import { days } from '../../public/days'
export default function page() {
  return (
    <div
      style={{
        paddingTop: '20px'
      }}
    >
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
