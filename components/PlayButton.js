"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link" 

const PlayButton = () => {
  return (
    <Link href='/playground'>
      <button
        className='fixed bottom-28 right-12 p-0 rounded shadow-lg hover:shadow-xl transition duration-300 focus:outline-none' 
        aria-label='Go to Playground'
      >
        <Image
          src='/images/button.avif' 
          alt='Play Button' 
          width={50} 
          height={50} 
          className='w-16 h-12 transition-transform transform hover:scale-120' // Optional scaling effect on hover
        />
      </button>
    </Link>
  )
}

export default PlayButton