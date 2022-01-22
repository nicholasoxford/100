import Link from "next/link";

export default function Header() {
  
  return (
    <header>
      <h1 >
      <Link href="/" passHref
      >
        <a style={{ fontSize: 'none', color: 'black'}}>100 Days</a>
      </Link>
      </h1>
    </header>
  )
}
