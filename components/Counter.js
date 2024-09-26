"use client"

import { useState } from "react"

export default function Counter() {
  const [counter, setCounter] = useState(0)

  return (
    <div className='flex justify-center items-center'>
      <button onClick={() => setCounter(prev => prev + 1)} className='bg-[#e8175d] text-white font-semibold uppercase py-2 px-4 rounded hover:bg-[#c3144f] transition duration-300'>
        You have clicked this Button {counter} times
      </button>
    </div>
  )
}
