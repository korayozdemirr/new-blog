import Left from './Left'
import Right from './Right'
export default function index() {
  return (
    <div className="grid grid-cols-1 mx-auto xl:max-w-6xl lg:max-w-5xl lg:grid-cols-2 lg:ml-auto">
      <Left />
      <Right />
    </div>
  )
}
