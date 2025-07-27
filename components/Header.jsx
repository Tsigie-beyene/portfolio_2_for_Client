import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { useTheme } from '@/context/ThemeContext'

const Header = () => {
  const { isDarkMode } = useTheme()
  
  return (
    <div className='w-11/12 max-w-3xl mx-auto text-center max-auto h-screen flex flex-col justify-center items-center gap-4'>
        <div>
            <Image src={assets.fik} alt="Profile Image" className="rounded-full w-32"/>
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
        I'm Seid Fikreselassie, a Master's student in Automatic Control and Robotics, with a strong background in Mechatronics and hands-on experience in human-robot interaction and intelligent control. I'm passionate about building smart, autonomous, and human-centered robotic systems. 
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
          <a href="#contact"
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 
          text-white rounded-full mx-auto hover:bg-black duration-500 transition-all'>
           Contact Me <Image src={assets.right_arrow_white} alt="Right Arrow" className='w-4' /> 

          </a>
          <a href="sample-resume.pdf" download 
          className={`px-10 py-3 border rounded-full flex items-center gap-2 transition-all duration-300
          ${isDarkMode 
            ? 'border-white text-white hover:bg-dark-hover hover:text-blue-400' 
            : 'border-gray-500 text-gray-700 hover:bg-light-hover hover:text-blue-500'
          }`}>
            My Resume <Image src={assets.download_icon} alt="Download Icon" className='w-4'/>
          </a>
        </div>
    </div>
  )
  
}

export default Header