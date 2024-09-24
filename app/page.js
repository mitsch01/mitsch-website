import Layout from "./layout"
import RepoGallery from "../components/RepoGallery"

export default function Page() {
  return (
    <Layout>
      {/* Home */}
      <div className='max-w-screen-lg mx-auto p-8'>
        {/* Header Image */}
        {/* <img src="../public..." alt="" /> */}

        {/* About */}
        <h2 className='text-xl font-semibold'>About</h2>
        <p className='text-lg text-gray-800 leading-relaxed mb-6'>This is where my About section should be displayed</p>

        {/* Projects */}
        <h2 className='text-xl font-semibold'>Check Out My GitHub Repositories Below</h2>
        <RepoGallery />
      </div>
    </Layout>
  )
}
