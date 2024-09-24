// app/project/[project-name]/page.js

import Link from "next/link"

// This is a server component in the app directory.
export default async function ProjectDetail({ params }) {
  const username = "mitsch01"
  const { "project-name": projectName } = params

  // Fetch project data from GitHub
  const res = await fetch(`https://api.github.com/repos/${username}/${projectName}`)

  if (!res.ok) {
    return <div>Project not found</div>
  }

  const project = await res.json()

  return (
    <div className='max-w-screen-lg mx-auto p-8'>
      {/* Header */}
      <h1 className='text-4xl font-bold uppercase text-black mb-6'>{project.name}</h1>

      {/* Description */}
      <p className='text-lg text-gray-800 leading-relaxed mb-6'>{project.description || "No description available."}</p>

      {/* GitHub Link */}
      <a href={project.html_url} target='_blank' rel='noopener noreferrer' className='inline-block bg-[#e8175d] text-black font-semibold uppercase py-2 px-4 rounded mb-6 hover:bg-[#c3144f]'>
        View on GitHub
      </a>
      <br />

      {/* Back to Projects Link */}
      <Link href='/' className='text-[#e8175d] hover:text-[#c3144f]'>
        ← Back to all projects
      </Link>
    </div>
  )
}
