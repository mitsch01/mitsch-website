"use client"
import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleModal = () => setIsModalOpen(!isModalOpen)

  return (
    <header className={`fixed top-0 w-full p-16 z-50 flex justify-between items-center transition duration-300`}>
      {/* Logo */}
      <Link href='/'>
        <div className='clickable text-white font-homemade text-5xl'>{`mitsch`}</div>
      </Link>

      {/* Burger Menu Icon */}
      <button className=' text-white focus:outline-none' onClick={toggleModal} aria-label='Open Menu'>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-12 w-12' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
          <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
        </svg>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-black z-50 flex flex-col justify-center items-center'>
          {/* Close Button */}
          <button className='absolute top-16 right-16 text-white text-6xl' onClick={toggleModal} aria-label='Close Menu'>
            &times;
          </button>

          {/* Logo in Modal */}
          <div className='clickable absolute top-16 left-16'>
            <Link href='/'>
              <div className='font-homemade text-5xl text-white'>mitsch</div>
            </Link>
          </div>

          {/* Navigation Items */}
          <nav className='font-cooperhewitt mt-16 flex flex-col space-y-8 text-center text-white'>
            <Link href='/' onClick={toggleModal} className={`text-6xl font-bold uppercase tracking-wider`}>
              Home
            </Link>
            <Link href='/#about' onClick={toggleModal} className={`text-6xl font-bold uppercase tracking-wider`}>
              About
            </Link>
            <Link href='/#projects' onClick={toggleModal} className={`text-6xl font-bold uppercase tracking-wider`}>
              Projects
            </Link>
            <Link href='/playground' onClick={toggleModal} className={`text-6xl font-bold uppercase tracking-wider`}>
              Playground
            </Link>
            <Link href='/contact' onClick={toggleModal} className={`text-6xl font-bold uppercase tracking-wider`}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
