import '../styles/global.css'
import Header from '../components/header/'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { menu } from '../components/header/Menu'
function MyApp({ Component, pageProps }) {
  const [myMenu, setmyMenu] = useState([
    {
      name: '404',
      href: '/404'
    },
    {
      name: '500',
      href: '/500'
    },
    ...menu
  ])
  const router = useRouter()
  const result = myMenu.find(({ href }) => href === router.asPath)
  return (
    <div className="dark">
      <Head>
        <link rel="icon" href="./profile.png" type="image/png" sizes="24x24" />
        <title>
          {result.name}
          {' | '}
          Koray Özdemir
        </title>
      </Head>
      <div className="antialiased text-gray-700 p-4">
        <Header />
        <main className="mt-6 mb-20">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  )
}
export default MyApp
