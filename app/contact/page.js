import Image from "next/image"

export default function Page() {
  return (
    <div className='max-w-screen-lg'>
      {/* Grid Layout */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Left: Image */}
        <div className='relative w-full h-full overflow-hidden'>
          <Image
            src='/images/miri_foto.jpeg'
            alt='Header Image'
            layout='fill' // Fill the container completely
            className='object-cover' // Ensures the image covers the container with aspect ratio maintained
          />
        </div>

        {/* Right: Text and Signup Form */}
        <div className='text-lg text-gray-800 p-8 leading-relaxed'>
          <h2 className='text-6xl font-bold uppercase text-black mb-6'>Contact</h2>
          <p className='mb-4'>I would love to hear from you! Feel free to reach out to me through the form below or connect with me via social media.</p>

          {/* Signup Form */}
          <form className='space-y-4'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                Name
              </label>
              <input type='text' id='name' className='mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500' placeholder='Your Name' />
            </div>

            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input type='email' id='email' className='mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500' placeholder='Your Email' />
            </div>

            <div>
              <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
                Message
              </label>
              <textarea id='message' rows='4' className='mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500' placeholder='Your Message' />
            </div>

            <button type='submit' className='w-full bg-[#e8175d] text-white py-2 px-4 rounded-md hover:bg-[#c3144f]'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
