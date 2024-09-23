import Link from "next/link"
import Layout from "./layout"

async function getProjects() {
  const projectsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
  const projects = await projectsPromise.json()
  return projects
}

export default async function Page() {
  const projects = await getProjects()

  return (
    <>
      <Layout>
        <h1>Hi, I'm Mitsch</h1>
        <p>This is my first website!!!!</p>
        <h3>My Projects</h3>
        <ul>
          {projects.map((project, index) => {
            return (
              <li key={index}>
                <Link href={"/project/" + project.name.toLowerCase()}>{project.name}</Link>
              </li>
            )
          })}
        </ul>
      </Layout>
    </>
  )
}
