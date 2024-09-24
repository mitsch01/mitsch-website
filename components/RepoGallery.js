"use client"
import { useEffect, useState } from "react"

const RepoGallery = () => {
  const [repos, setRepos] = useState([])
  const username = "mitsch01" // Replace with your GitHub username

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch(`https://api.github.com/users/${username}/repos`)
      const data = await response.json()
      setRepos(data)
    }

    fetchRepos()
  }, [])

  return (
    <div className='flex flex-wrap justify-center p-6'>
      {repos.map(repo => (
        <div key={repo.id} className='bg-white border border-gray-200 rounded-lg shadow-md m-4 p-4 w-64'>
          <h3 className='text-lg font-semibold'>{repo.name}</h3>
          <p className='text-gray-600'>{repo.description || "No description available."}</p>
          <a href={repo.html_url} target='_blank' rel='noopener noreferrer' className='mt-4 inline-block bg-[#e8175d] text-white px-4 py-2 rounded hover:bg-[#e1175d]'>
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  )
}

export default RepoGallery
