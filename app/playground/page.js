"use client"

import { useState, useEffect } from "react"
import HeaderWhite from "components/HeaderWhite"
import Counter from "components/Counter"
import ConnectingDots from "components/ConnectingDots"

export default function Playground() {
  const [prompts, setPrompts] = useState([])
  const [newPrompt, setNewPrompt] = useState("")

  // Fetch prompts from the API
  useEffect(() => {
    async function fetchPrompts() {
      const res = await fetch("/api/prompts")
      const data = await res.json()
      setPrompts(data)
    }

    fetchPrompts()
  }, [])

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault()
    if (!newPrompt.trim()) return // don't allow empty prompts

    // Post the new prompt
    const res = await fetch("/api/prompts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: newPrompt })
    })

    if (res.ok) {
      // If the post request succeeds, refresh the prompt list
      const updatedPrompts = await fetch("/api/prompts").then(res => res.json())
      setPrompts(updatedPrompts)
      setNewPrompt("") // Clear input
    }
  }

  return (
    <div className='bg-black min-h-screen flex flex-col'>
      <HeaderWhite />
      <div className='flex-grow flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <Counter />
          <ConnectingDots />
          <form onSubmit={handleSubmit} className='mt-4'>
            <input type='text' value={newPrompt} onChange={e => setNewPrompt(e.target.value)} className='p-2 border border-gray-300 rounded' placeholder='Leave a prompt...' />
            <button type='submit' className='ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Submit
            </button>
          </form>
          <div className='mt-4'>
            {prompts.length > 0 ? (
              prompts.map((prompt, index) => (
                <div key={index} className='text-white p-2 border-b border-gray-300'>
                  {prompt.prompt}
                </div>
              ))
            ) : (
              <p className='text-white'>No prompts yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
