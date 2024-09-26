import Layout from "./layout"
import Image from "next/image"
import RepoGallery from "../components/RepoGallery"

export default function Page() {
  return (
    <>
      {/* Header */}
      <div className='relative w-full h-[500px] overflow-hidden'>
        <Image src='/images/header-image.jpg' alt='Header Image' layout='fill' className='object-cover' />
      </div>

      <div className='relative z-10 max-w-screen-lg mx-auto m-8 p-8'>
        {/* About */}
        <section id="about">
          <h2 className='text-6xl font-bold uppercase text-black mb-6'>About</h2>
          <div className='flex flex-wrap gap-3 mb-8'>
            <span className='bg-[#e8175d] text-black font-semibold py-1 px-3 uppercase'>Leitbild</span>
            <span className='bg-[#e8175d] text-black font-semibold py-1 px-3 uppercase'>Historie</span>
            <span className='bg-[#e8175d] text-black font-semibold py-1 px-3 uppercase'>Sanierung & Weiterentwicklung</span>
            <span className='bg-[#e8175d] text-black font-semibold py-1 px-3 uppercase'>Selbstverpflichtung</span>
            <span className='bg-[#e8175d] text-black font-semibold py-1 px-3 uppercase'>Hamburger Erklärung</span>
            <span className='bg-[#e8175d] text-black font-semibold py-1 px-3 uppercase'>Initiative gg 5.3 Weltoffenheit</span>
            <span className='bg-[#e8175d] text-black font-semibold py-1 px-3 uppercase'>Partner*innen & Fördernde</span>
            <span className='bg-[#e8175d] text-black font-semibold py-1 px-3 uppercase'>Bündnis Internationaler</span>
          </div>
          <div className='text-lg text-gray-800 leading-relaxed'>
            <p className='mb-4'>
              <strong>Kampnagel</strong> ist ein weltweit bekanntes internationales Produktionshaus, das neben zeitgenössischen darstellenden Künsten auch Konzerte, Konferenzen und eine Vielzahl unterschiedlicher Festivals und Themenschwerpunkte präsentiert.
            </p>
            <p className='mb-4'>Auf den sechs Kampnagel-Bühnen werden die Arbeiten internationaler Künstler*innen und die der lokalen Hamburger Szene gezeigt. Das Programm bildet ein breites Spektrum an ästhetischen Positionen und wegweisenden Tendenzen ab, nicht nur in Theater, Tanz und Performance, sondern auch in Musik, Bildender Kunst und Architektur.</p>
            <p>Insgesamt finden auf Kampnagel über 900 Veranstaltungen pro Spielzeit statt, die 180.000 Besucher*innen auf das Gelände lockt.</p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h1 className='text-6xl font-bold uppercase text-black mt-12'>Projects</h1>
          <RepoGallery />
        </section>
      </div>
    </>
  )
}
