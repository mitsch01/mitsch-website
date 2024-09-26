import Link from "next/link"
import ProjectGallery from "components/ProjectGallery"

export default async function ProjectDetail({ params }) {
  const username = "mitsch01"
  const { "project-name": projectName } = params

  // Fetch project data from GitHub
  const res = await fetch(`https://api.github.com/repos/${username}/${projectName}`)

  if (!res.ok) {
    return <div>Project not found</div>
  }

  const project = await res.json()

  // Fetch languages used in the project
  const languagesRes = await fetch(`https://api.github.com/repos/${username}/${projectName}/languages`)
  const languagesData = await languagesRes.json()
  const languages = Object.keys(languagesData)

  // Define gallery items - you can fetch real image/video data here
  // For now, we will use placeholders (you can replace these with actual content later)
  const galleryItems = ["Placeholder Image 1", "Placeholder Video 2", "Placeholder Image 3", "Placeholder Image 4", "Placeholder Image 5"]

  return (
    <div className='max-w-screen-lg mx-auto p-8'>
      {/* Header */}
      <h1 className='text-4xl font-bold uppercase text-black mb-6'>{project.name}</h1>

      {/* Description */}
      <p className='text-lg text-gray-800 leading-relaxed mb-6'>{project.description || "No description available."}</p>

      {/* Languages Used */}
      <p className='text-lg text-gray-800 leading-relaxed mb-6'>
        <strong>Languages Used:</strong> {languages.length > 0 ? languages.join(", ") : "None"}
      </p>

      {/* Libraries/Topics Used */}
      <p className='text-lg text-gray-800 leading-relaxed mb-6'>
        <strong>Libraries/Topics:</strong> {project.topics.length > 0 ? project.topics.join(", ") : "None"}
      </p>

      {/* Created At */}
      <p className='text-lg text-gray-800 leading-relaxed mb-6'>
        <strong>Created At:</strong> {new Date(project.created_at).toLocaleDateString()}
      </p>

      {/* Updated At */}
      <p className='text-lg text-gray-800 leading-relaxed mb-6'>
        <strong>Last Updated:</strong> {new Date(project.updated_at).toLocaleDateString()}
      </p>

      {/* Project Gallery */}
      <ProjectGallery items={galleryItems} />

      {/* GitHub Link */}
      <a href={project.html_url} target='_blank' rel='noopener noreferrer' className='inline-block bg-[#e8175d] text-white font-semibold uppercase mt-6 py-2 px-4 rounded mb-6 hover:bg-[#e8175d]'>
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
