import Left from './Left'
import Right from './Right'
export default function index() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Left className="col-span-2" />
      <Right />
    </div>
  )
}
