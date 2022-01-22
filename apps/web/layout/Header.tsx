import Link from "next/link";

export default function Header() {
  
  return (
    <header style={{ margin: '10px'}}>
      <h1 >
      <Link href="/" passHref replace
      >
        <a style={{ fontSize: 'none', color: 'black'}} >/</a>
      </Link>
      </h1>
    </header>
  )
}
