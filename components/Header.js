import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>Dashboard</a>
        </Link>
      </nav>
    </header>
  )
}
