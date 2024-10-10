import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  {
    name: 'Home',
    path: '/'
  }
]

export default function Navbar() {
  return(
    <>
      <div className="fixed top-0 z-[999] flex w-full justify-center mt-10">
        <div className="flex p-3 gap-1 bg-gradient-to-br from-dark-2 to-dark border-dark border shadow-lg justify-center items-center rounded-full">
          <Link href="#home" className="flex px-5 py-3 bg-dark/50 hover:bg-primary-500 transition-all duration-500 rounded-full items-center gap-1">
            <h1 className="text-white text-xs lg:text-base">Home</h1>
          </Link>
          <Link href="#about" className="flex px-5 py-3 bg-dark/50 hover:bg-primary-500 transition-all duration-500 rounded-full items-center gap-1" >
            <h1 className="text-white text-xs lg:text-base">About Me</h1>
          </Link>
          <Link href="#practice" className="flex px-5 py-3 bg-dark/50 hover:bg-primary-500 transition-all duration-500 rounded-full items-center gap-1" >
            <h1 className="text-white text-xs lg:text-base">Practice</h1>
          </Link>
        </div>
      </div>
    </>
  )
}