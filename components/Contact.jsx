import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useTheme } from '@/context/ThemeContext'

const Contact = () => {
  const { isDarkMode } = useTheme()
  
  return (
    <div id="contact" className='w-full px-[12%] py-10 scroll-mt-20'>
        <h2 className={`text-center text-5xl font-Ovo mb-4 transition-colors duration-300
        ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Get In Touch</h2>
        <p className={`text-center max-w-2xl mx-auto mb-12 font-Ovo transition-colors duration-300
        ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
        </p>
        <form className='max-w-2xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            <input type="text" placeholder='Enter your name' required 
            className={`w-full p-4 outline-none border rounded-lg transition-all duration-300
            ${isDarkMode 
              ? 'border-gray-600 bg-dark-theme text-white placeholder-gray-400' 
              : 'border-gray-400 bg-white text-gray-800 placeholder-gray-500'
            }`} />
            <input type="email" placeholder='Enter your email' required 
            className={`w-full p-4 outline-none border rounded-lg transition-all duration-300
            ${isDarkMode 
              ? 'border-gray-600 bg-dark-theme text-white placeholder-gray-400' 
              : 'border-gray-400 bg-white text-gray-800 placeholder-gray-500'
            }`} />
           </div>
           <textarea rows={6} placeholder='Enter your message' required 
           className={`w-full p-4 outline-none border rounded-lg mb-8 transition-all duration-300
           ${isDarkMode 
             ? 'border-gray-600 bg-dark-theme text-white placeholder-gray-400' 
             : 'border-gray-400 bg-white text-gray-800 placeholder-gray-500'
           }`}/>
           <div className='text-center'>
             <button type='submit' className={`py-3 px-8 flex items-center justify-center gap-2 mx-auto rounded-full transition-all duration-300
             ${isDarkMode 
               ? 'border border-white text-white hover:bg-dark-hover' 
               : 'border border-gray-700 text-gray-700 hover:bg-light-hover'
             }`}>
              Submit now <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Arrow Icon" className="w-3"/>
             </button>
           </div>
        </form>
    </div>
  )
}

export default Contact