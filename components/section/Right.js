import Image from 'next/image'
export default function Right() {
  return (
    <div className="relative mt-12 h-96 shadow-2xl ">
      <Image
        layout="fill"
        className="rounded-md"
        src="/profil.jpg"
        alt="Koray özdemir"
      />
    </div>
  )
}
