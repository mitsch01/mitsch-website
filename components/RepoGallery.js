"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const RepoGallery = () => {
  const [repos, setRepos] = useState([])
  const username = "mitsch01"

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch(`https://api.github.com/users/${username}/repos`)
      const data = await response.json()
      setRepos(data)
    }

    fetchRepos()
  }, [])

  return (
    <div className='flex flex-wrap py-8'>
      {repos.map(repo => (
        <div key={repo.id} className='bg-white border border-gray-200 mr-8 mb-8 p-10 w-64'>
          <h3 className='text-lg font-semibold'>{repo.name}</h3>
          <p className='text-gray-600'>{repo.description || "No description available."}</p>
          <Link href={`/project/${repo.name}`} className='mt-4 inline-block bg-[#e8175d] text-white px-4 py-2 rounded hover:bg-[#e1175d]'>
            View Details
          </Link>
        </div>
      ))}
    </div>
  )
}

export default RepoGallery
