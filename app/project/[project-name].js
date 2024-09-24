import { useRouter } from "next/router"
import Link from "next/link"

const ProjectDetail = ({ project }) => {
  const router = useRouter()
  const { "project-name": projectName } = router.query

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold'>{project.name}</h1>
      <p className='text-gray-600 mt-4'>{project.description || "No description available."}</p>
      <p className='text-gray-500 text-sm'>
        ⭐ {project.stargazers_count} | 🍴 {project.forks_count}
      </p>
      <a href={project.html_url} target='_blank' rel='noopener noreferrer' className='mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
        View on GitHub
      </a>
      <br />
      <Link href='/'>
        <a className='mt-6 inline-block text-blue-500'>← Back to all projects</a>
      </Link>
    </div>
  )
}

export async function getStaticPaths() {
  const username = "mitsch01" 
  const res = await fetch(`https://api.github.com/users/${username}/repos`)
  const repos = await res.json()

  // Generate paths for each repository dynamically
  const paths = repos.map(repo => ({
    params: { "project-name": repo.name }
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const username = "mitsch01" 
  const res = await fetch(`https://api.github.com/repos/${username}/${params["project-name"]}`)
  const project = await res.json()

  return { props: { project } }
}

export default ProjectDetail
