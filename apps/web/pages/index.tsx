import Link from "next/link"

export default function Web() {
  return (
    <div>
      <h1>100 Days</h1>
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
