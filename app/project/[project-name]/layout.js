export const metadata = {
  title: "Projects",
  description: "Project details from GitHub"
}

export default function ProjectLayout({ children }) {
  return (
    <div>
      <header>
        <h1>Projects</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}
