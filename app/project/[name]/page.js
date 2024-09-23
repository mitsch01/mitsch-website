import Layout from "../layout.js"

async function getProject(name) {
  const allProjectsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
  const allProjects = await allProjectsPromise.json()

  const project = allProjects.filter(project => {
    return name.toUpperCase() === project.name.toUpperCase()
  })[0]
  return project
}

export default async function Project({params}) {
  const project = await getProject(params.name)

  return (
    <Layout>
      <h2>{project.name}</h2>
      {project.photo && <img src={project.photo} />}
      <p>{project.description}</p>
    </Layout>
  )
}