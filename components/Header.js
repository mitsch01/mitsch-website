"use client"
import Nav from "./Nav"

export default function Header({ transparent = false }) {
  return (
    <header className={`flex justify-between items-center p-4 ${transparent ? "bg-transparent" : "bg-black"} text-white`}>
      <div className='font-bold text-xl'>Logo</div>
      <Nav />
    </header>
  )
}



// Example Usage:

// <Header transparent={false} /> // For black background
// <Header transparent={true} /> // For transparent background