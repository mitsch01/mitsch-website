async function getProject(name) {
  const allProjectsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
  const allProjects = await allProjectsPromise.json()

  const project = allProjects.filter(project => {
    return name.toUpperCase() === project.name.toUpperCase()
  })[0]
  return project
}

export default async function Project({ params }) {
  const project = await getProject(params.name)

  return (
    <div className='max-w-screen-lg mx-auto p-8'>
      {/* Project Name */}
      <h2 className='text-5xl font-bold uppercase text-black mb-6'>{project.name}</h2>

      {/* Project Photo */}
      {project.photo && <img src={project.photo} alt={project.name} className='w-full h-auto rounded-lg shadow-lg mb-6' />}

      {/* Project Description */}
      <p className='text-lg text-gray-800 leading-relaxed'>{project.description}</p>
    </div>
  )
}
