import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
export const menu = [
  {
    name: 'Ana Sayfa',
    href: '/'
  },
  {
    name: 'Hakkımda',
    href: '/about'
  },
  {
    name: 'Servisler',
    href: '/services'
  },
  {
    name: 'İletişim',
    href: '/contact'
  }
]
export default function Menu() {
  const router = useRouter()

  const [open, setOpen] = useState('')
  const addClass = () => {
    if (open === '') {
      setOpen('open')
    } else {
      setOpen('')
    }
  }
  return (
    <div className="flex flex-grow items-center ">
      <ul className="hidden lg:flex flex-row ml-auto">
        {menu.map((item, index) => {
          index > 3 ? (item.name = '') : ''
          return (
            <li
              className={
                item.href === router.asPath ? 'menuBtn active' : 'menuBtn'
              }
              key={index}
            >
              <Link href={item.href}>
                <a>{item.name}</a>
              </Link>
            </li>
          )
        })}
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            className="cursor-pointer"
          >
            <rect fill="none" height="24" width="24" />
            <path d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z" />
          </svg>
        </li>
      </ul>

      <div className="lg:hidden ml-auto">
        <div
          className={'hamBtn ' + open}
          style={{
            transition: 'all .5s ease-in-out'
          }}
          onClick={addClass}
        >
          <div
            className="ham__Btn "
            style={{ transition: 'all .5s ease-in-out' }}
          ></div>
        </div>
      </div>
    </div>
  )
}
