"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const PlayButton = () => {
  const [rotation, setRotation] = useState(0)

  // This effect listens to scroll events and updates the rotation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setRotation(scrollY * 0.2) // Adjust the multiplier to control the rotation speed
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Link href='/playground'>
      <button className='fixed z-10 bottom-28 right-12 focus:outline-none' aria-label='Go to Playground'>
        <Image
          src='/images/button-black.png'
          alt='Play Button'
          width={50}
          height={50}
          className={`w-36 h-36 transition-transform duration-300 transform hover:scale-125`}
          style={{ transform: `rotate(${rotation}deg)` }} // Apply rotation based on scroll
        />
      </button>
    </Link>
  )
}

export default PlayButton
