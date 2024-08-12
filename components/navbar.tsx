import { HomeIcon } from "./ui/icons"
import Link from "next/link"

export default function Navbar() {
  return(
    <>
      <div className="fixed top-0 z-[999] flex w-full justify-center mt-10">
        <div className="flex p-3 bg-gradient-to-br from-dark-2 to-dark border-dark border shadow-lg justify-center items-center rounded-full">
          <Link href="#" className="flex px-5 py-3 bg-primary-500 rounded-full items-center gap-1">
            <h1 className="text-white">Home</h1>
          </Link>
          <Link href="#" className="flex px-5 py-3 bg-primary-500 rounded-full items-center gap-1">
            <h1 className="text-white">Services</h1>
          </Link>
        </div>
      </div>
    </>
  )
}