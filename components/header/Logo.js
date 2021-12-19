import Link from 'next/link'
export default function Logo() {
  return (
    <Link href="/">
      <a
        className="m-0 p-0 text-3xl font-normal inline-block"
        style={{ lineHeight: 'inherit', whiteSpace: 'nowrap' }}
      >
        Koray Özdemir
      </a>
    </Link>
  )
}
