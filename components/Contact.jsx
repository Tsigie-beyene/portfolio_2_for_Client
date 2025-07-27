import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useTheme } from '@/context/ThemeContext'

const Contact = () => {
  const { isDarkMode } = useTheme()
  
  return (
    <div id="contact" className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-cover bg-center
    bg-[length:90%_auto]'>
        <h4 className={`text-center mb-2 text-lg font-Ovo transition-colors duration-300
        ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Connect With Me</h4>
        <h2 className={`text-center text-5xl font-Ovo transition-colors duration-300
        ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Get In Touch</h2>
        <p className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo transition-colors duration-300
        ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'd love to hear from you! Whether you have a question, a project in mind, or just want to say hi,
        </p>
        <form className='max-w-2xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
            <input type="text" placeholder='Enter Your Name' required 
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md transition-all duration-300
            ${isDarkMode 
              ? 'border-gray-600 bg-dark-theme text-white placeholder-gray-400' 
              : 'border-gray-400 bg-white text-gray-800 placeholder-gray-500'
            }`} />
            <input type="email" placeholder='Enter Your Email' required 
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md transition-all duration-300
            ${isDarkMode 
              ? 'border-gray-600 bg-dark-theme text-white placeholder-gray-400' 
              : 'border-gray-400 bg-white text-gray-800 placeholder-gray-500'
            }`} />
           </div>
           <textarea rows={6} placeholder='Enter Your Message' required 
           className={`w-full p-4 outline-none border-[0.5px] rounded-md mb-6 transition-all duration-300
           ${isDarkMode 
             ? 'border-gray-600 bg-dark-theme text-white placeholder-gray-400' 
             : 'border-gray-400 bg-white text-gray-800 placeholder-gray-500'
           }`}/>
           <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 
           text-white rounded-full mx-auto hover:bg-black duration-500 transition-all'>
            Send Message <Image src={assets.right_arrow_white} alt="Right Arrow" className='w-4' /></button>

      <p className={`mt-4 transition-colors duration-300
      ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Sending...</p>
        </form>
    </div>
  )
}

export default Contact