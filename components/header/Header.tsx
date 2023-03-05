import { GlobeAlt, Menu, Search, SearchOutline, UserCircle } from "heroicons-react"
import Image from "next/image"

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5
    md:px-10">
    
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image src="https://links.papareact.com/qd3" alt={""} fill className="object-contain object-left" />
      </div>
      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input type="text" placeholder="Start your search" className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400" />
     <Search className="hidden md:inline-flex h-6 bg-red-400 text-white
    p-2 rounded-full cursor-pointer md:mx-2"/>
      </div>
      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline text-sm cursor-pointer">Become a host</p>
        <GlobeAlt className="h-6"/>
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <Menu className="h-6"/>
          <UserCircle className="h-6"/>
        </div>
      </div>
    </header>
  )
}

export default Header