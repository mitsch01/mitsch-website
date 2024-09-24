"use client"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className='bg-black text-white p-4'>
      <nav>
        <ul className='flex space-x-4'>
          <li>
            <Link href='/' className='hover:text-white'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/about' className='hover:text-white'>
              About
            </Link>
          </li>
          <li>
            <Link href='/projects' className='hover:text-white'>
              Projects
            </Link>
          </li>
          <li>
            <Link href='/playground' className='hover:text-white'>
              Playground
            </Link>
          </li>
          <li>
            <Link href='/contact' className='hover:text-white'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <p className='mt-4 text-right'>© {new Date().getFullYear()} Miriam Schwartz. All rights reserved.</p>
    </footer>
  )
}
