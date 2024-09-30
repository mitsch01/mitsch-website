"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image" 

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

  const transformString = input => {
    return input
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  // const getImagePath = repoName => {
  //   const formattedName = repoName.replace(/[-_]/g, "_") // Replace hyphens or underscores with underscores
  //   return `/images/${formattedName}.png` // Assuming images are named consistently
  // }

  return (
    <div className='flex flex-wrap py-8'>
      {repos.map(repo => (
        <div key={repo.id} className='bg-white border border-gray-200 mr-8 mb-8 p-10 w-80 flex flex-col justify-between'>
          {" "}
          {/* Flex column for alignment */}
          <div>
            {/* <Image
              src={getImagePath(repo.name)} // Use the generated image path
              alt={transformString(repo.name)} // Provide an alt text
              width={200} // Adjust width as needed
              height={200} // Adjust height as needed
              className='mb-4' // Add some margin below the image
            /> */}
            <h3 className='text-lg font-semibold py-4'>{transformString(repo.name)}</h3>
            <p className='text-gray-600'>{repo.description || "No description available."}</p>
          </div>
          <Link href={`/project/${repo.name}`} className='mt-4 inline-block bg-[#e8175d] text-white px-4 py-2 rounded hover:bg-[#e1175d] text-center'>
            {" "}
            {/* Align button to the bottom */}
            View Details
          </Link>
        </div>
      ))}
    </div>
  )
}

export default RepoGallery
