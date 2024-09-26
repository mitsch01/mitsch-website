"use client"
import Link from "next/link"
import Nav from "./Nav"

export default function Header({ transparent = false }) {
  return (
    <header className={`sticky top-0 z-10 flex justify-between items-center p-4 ${transparent ? "bg-transparent" : "bg-black"} text-white`}>
      <Link href='/'>
        <div className='font-bold text-xl'>Logo</div>
      </Link>
      <Nav />
    </header>
  )
}



// Example Usage:

// <Header transparent={false} /> // For black background
// <Header transparent={true} /> // For transparent background