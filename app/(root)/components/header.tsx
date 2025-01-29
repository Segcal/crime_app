import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='bg-gray-900'>
  <div className="w-full px-44 flex justify-between items-center py-6">
        <div className="text-xl font-bold text-white">RET<span className="text-red-500">KOM</span></div>
        <ul className="hidden md:flex space-x-6">
          <li><Link href={"/"} className="text-gray-300 hover:text-white">Home</Link></li>
          <li><Link href={"/"} className="text-gray-300 hover:text-white">About Us</Link></li>
          <li><Link href={"/"} className="text-gray-300 hover:text-white">Goals & Objectives</Link></li>
          <li><Link href={"/"} className="text-gray-300 hover:text-white">Key Services</Link></li>
          <li><Link href={"/Signup"} className="text-gray-300 hover:text-white bg-red-500 px-4 py-2 rounded-xl">Sign Up</Link></li>
        </ul>
      </div>
    </header>
  )
}
