import Logo from './Logo'
import Menu from './Menu'
export default function Header() {
  return (
    <header
      className="transition-all bg-white items-center h-24 grid top-0 left-0 right-0 z-50 fixed p-4"
      style={{ boxShadow: '0 3px 9px rgb(0 0 0 /5%)' }}
    >
      <div>
        <nav className=" mx-auto flex-row flex-wrap relative flex items-center justify-between xl:max-w-6xl lg:max-w-5xl md:max-w-3xl ">
          <Logo />
          <Menu />
        </nav>
      </div>
    </header>
  )
}
