"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const PlayButton = () => {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const newRotation = scrollY * 0.1
          setRotation(newRotation)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Link href='/playground'>
      <button className='fixed z-10 bottom-12 right-12 focus:outline-none' aria-label='Create a poem'>
        <div
          className='relative w-28 h-28 transition-transform duration-300 transform hover:scale-125 flex items-center justify-center'
          style={{ transform: `rotate(${rotation}deg)`, transition: "transform 0.1s ease-out" }} // Adding smooth transition
        >
          <Image src='/images/create-button.png' alt='Play Button' width={100} height={100} className='absolute w-full h-full' />
        </div>
      </button>
    </Link>
  )
}

export default PlayButton
