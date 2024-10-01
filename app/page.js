import Image from "next/image"
import RepoGallery from "../components/RepoGallery"
import HeaderWhite from "../components/HeaderWhite"
import HeaderBlack from "../components/HeaderBlack"

export default function Page() {
  return (
    <>
      {/* Header */}
      <HeaderWhite />
      <div className='relative w-full h-screen overflow-hidden'>
        <Image src='/images/header-image.jpg' alt='Header Image' layout='fill' className='object-cover' />
      </div>

      <div className='relative z-10 max-w-screen-md mx-auto m-8 p-8'>
        {/* About */}
        <section id='about'>
          <h1 className='text-7xl font-bold uppercase text-black pt-16 mt-4 mb-8 tracking-tight'>About</h1>
          <div className='flex flex-wrap gap-3 mb-8'>
            <span className='bg-[#e8175d] text-white py-2 px-6 uppercase'>Fullstack Development</span>
            <span className='bg-[#e8175d] text-white py-2 px-6 uppercase'>Frontend Development</span>
            <span className='bg-[#e8175d] text-white py-2 px-6 uppercase'>JavaScript</span>
            <span className='bg-[#e8175d] text-white py-2 px-6 uppercase'>React</span>
            <span className='bg-[#e8175d] text-white py-2 px-6 uppercase'>Next JS</span>
            <span className='bg-[#e8175d] text-white py-2 px-6 uppercase'>HTML & CSS</span>
            <span className='bg-[#e8175d] text-white py-2 px-6 uppercase'>Tailwind CSS</span>
            <span className='bg-[#e8175d] text-white py-2 px-6 uppercase'>Daisy UI</span>
            <span className='bg-[#e8175d] text-white py-2 px-6 uppercase'>Google Firebase</span>
            <span className='bg-[#e8175d] text-white py-2 px-6 uppercase'> Procreate </span>
            <span className='bg-[#e8175d] text-white py-2 px-6 uppercase'> Photoshop </span>
            <span className='bg-[#e8175d] text-white py-2 px-6 uppercase'>Creativity</span>
            <span className='bg-[#e8175d] text-white py-2 px-6 uppercase'>English & German</span>
          </div>
          <div className='text-lg text-gray-800 leading-relaxed'>
            <p className='mb-4'>Hi, I'm Miriam – a frontend developer based in Hamburg, passionate about art, design, and everything related to making things visually appealing. I'm currently looking for a part-time position as a frontend developer where I can focus on the digital side of design, helping clients bring their ideas to life through websites and apps that align with their corporate identity. Outside of my work, I will continue to spend time in my art studio, painting and illustrating to unwind. I bike everywhere and love being outdoors. </p>
          </div>
        </section>

        {/* Projects */}
        <section id='projects'>
          <h1 className='text-7xl font-bold uppercase text-black pt-16 mt-20 tracking-tight'>Projects</h1>
          <RepoGallery />
        </section>
      </div>
    </>
  )
}
