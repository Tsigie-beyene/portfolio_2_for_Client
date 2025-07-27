import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { useTheme } from '@/context/ThemeContext'

const Header = () => {
  const { isDarkMode } = useTheme()
  
  return (
    <div className='w-11/12 max-w-3xl mx-auto text-center max-auto h-screen flex flex-col justify-center items-center gap-4'>
        <div>
            <Image src={assets.fik} alt="Profile Image" className="rounded-full w-32 mt-25 lg:mt-15"/>
        </div>
        <h3 className={`flex items-end gap-2 text-xl md:text-2xl font-semibold mb-3 font-Ovo transition-colors duration-300
        ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Hi! I'm Seid Fikreselassie 😊 

        </h3>
        <h1 className={`text-2xl lg:text-4xl xl:text-[36px] font-Ovo transition-colors duration-300
        ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        Robotics & Control Master's Student | Human-Robot Interaction | Mechatronics Engineer </h1>
        <p className={`max-w-3xl mx-auto font-Ovo transition-colors duration-300
        ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        I am a robotics engineer from Ethiopia with experience in research labs and academia across France, Poland, and Japan.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
          <a href="#contact"
          className={`py-3 px-8 flex items-center justify-center gap-2 rounded-full transition-all duration-300
          ${isDarkMode 
            ? 'bg-dark-theme border border-white text-white hover:bg-dark-hover' 
            : 'bg-black/80 text-white hover:bg-black'
          }`}>
           Contact Me <Image src={assets.right_arrow_white} alt="Right Arrow" className='w-4' /> 

          </a>
          <a href="sample-resume.pdf" download 
          className={`py-3 px-8 flex items-center justify-center gap-2 rounded-full transition-all duration-300
          ${isDarkMode 
            ? 'bg-white text-gray-800 hover:bg-gray-100 hover:scale-105 hover:shadow-lg' 
            : 'border border-gray-500 text-gray-700 hover:bg-light-hover hover:text-blue-500'
          }`}>
            My Resume <Image src={assets.download_icon} alt="Download Icon" className='w-4'/>
          </a>
        </div>
    </div>
  )
  
}

export default Header