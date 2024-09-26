"use client"
import Link from "next/link"

export default function Nav() {
  return (
    <div className='p-4'>
      <nav className='space-x-4'>
        <Link href='/' className='text-white hover:text-gray-300'>
          Home
        </Link>
        <Link href='/#about' className='text-white hover:text-gray-300'>
          About
        </Link>
        <Link href='/#projects' className='text-white hover:text-gray-300'>
          Projects
        </Link>
        <Link href='/playground' className='text-white hover:text-gray-300'>
          Playground
        </Link>
        <Link href='/contact' className='text-white hover:text-gray-300'>
          Contact
        </Link>
      </nav>
    </div>
  )
}
