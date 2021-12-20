import Left from './Left'
import Right from './Right'
import Head from 'next/head'
export default function index() {
  return (
    <div className="grid grid-cols-1 h-full mx-auto xl:max-w-6xl lg:max-w-5xl md:max-w-3xl md:grid-cols-2">
      <Left />
      <Right />
    </div>
  )
}
