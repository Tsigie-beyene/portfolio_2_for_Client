import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { useTheme } from '@/context/ThemeContext'

const about = () => {
  const { isDarkMode } = useTheme()
  
  return (
    <div id='about' className='w-full px-[12%] py-20 scroll-mt-20'>
        <h4 className={`hidden md:block text-center mb-2 text-lg font-Ovo transition-colors duration-300
        ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Introduction</h4>
        <h2 className={`text-center text-3xl md:text-4xl lg:text-5xl font-Ovo transition-colors duration-300
        ${isDarkMode ? 'text-white' :'text-gray-800'}`}>About Me</h2>
        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
               <Image src={assets.fik} alt="user" 
               className="w-full rounded-3xl" />
            </div>
            <div className='flex-1'>
                <p className={`mb-10 max-w-2xl font-Ovo transition-colors duration-300
                ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm Seid Fikreselassie, a Master's student in Automatic Control and Robotics, with a strong background in Mechatronics and hands-on experience in human-robot interaction and intelligent control. I'm passionate about building smart, autonomous, and human-centered robotic systems.
                </p>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 '>
                  {infoList.map(({ icon,iconDark,title,description},index)=>(
                  <li key={index} className={`border-[0.5px] rounded-xl p-6 cursor-pointer transition-all duration-500 hover:-translate-y-1
                  ${isDarkMode 
                    ? 'border-gray-600 hover:bg-dark-hover hover:shadow-custom-white' 
                    : 'border-gray-400 hover:bg-light-hover hover:shadow-custom-black'
                  }`}>
                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                    <h3 className={`my-4 font-semibold transition-colors duration-300
                    ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>{title}</h3>
                    <p className={`text-sm transition-colors duration-300
                    ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
                  </li>

                  ))}
                </ul>
                <h4 className={`my-6 font-Ovo transition-colors duration-300
                ${isDarkMode ? 'text-white' : 'text-gray-700'}`}> Tools I Use </h4>
                <ul className='flex items-center gap-3 sm:gap-5'>
                  {toolsData.map((tool,index)=>(
                    <li className={`flex items-center justify-center
                    w-12 sm:w-14 aspect-square border rounded-lg cursor-pointer hover:-translate-y-1 transition-all duration-500
                    ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`} key={index} >
                      <Image src={tool} alt={tool} className='w-5 sm:w-7'/>
          
                    </li>
                  ))}
                </ul>

            </div>
        </div>
    </div>
  )
}

export default about