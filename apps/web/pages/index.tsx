import Link from "next/link";

export default function Web() {
  return (
    <div>
      <h1>100 Days</h1>
      <ul>
        <li>
          <Link href="/1">Day One</Link>
        </li>
      </ul>
    </div>
  );
}
