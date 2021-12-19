import Link from 'next/link'
export default function Menu() {
  return (
    <div className="flex flex-grow items-center">
      <ul className="flex flex-row ml-auto md:hidden">
        <li className="px-3 py-0 transition-all relative ">
          <Link href="/">
            <a className="text-xl">Home</a>
          </Link>
        </li>
        <li className="px-3 py-0 transition-all relative ">
          <Link href="/about">
            <a className="text-xl">About</a>
          </Link>
        </li>
        <li className="px-3 py-0 transition-all relative ">
          <Link href="/about">
            <a className="text-xl">Services</a>
          </Link>
        </li>
        <li className="px-3 py-0 transition-all relative ">
          <Link href="/about">
            <a className="text-xl">Contact</a>
          </Link>
        </li>
      </ul>
      <div className="md:hidden">
        <p>menü</p>
      </div>
    </div>
  )
}
