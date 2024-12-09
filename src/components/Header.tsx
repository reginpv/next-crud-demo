import Link from "next/link"
export default function Header() {
  return (
    <header className="bg-gray-100">
      <div className="header__container container p-5">
        <div className="">
          <h1 className="text-center font-bold text-xl">
            <Link href="/" className="no-underline">Book Libray (demo)</Link>
          </h1>
        </div>
      </div>
    </header>
  )
}