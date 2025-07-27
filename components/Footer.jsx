import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { useTheme } from '@/context/ThemeContext'

const Footer = () => {
  const { isDarkMode } = useTheme()
  
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <div className="flex items-center justify-center gap-1 mb-2">
                <span className={`text-2xl font-bold transition-colors duration-300
                ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Seid
                </span>
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="mail icon" className="w-6"/>
            <span className={`transition-colors duration-300
            ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
              fikreselassieeshetu.seid@etud.univ-evry.fr
            </span>
            </div>
        </div>
        <div className={`text-center sm:flex items-center justify-between border-t mx-[10%] py-6 mt-6 transition-all duration-300
        ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>
            <p className={`transition-colors duration-300
            ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              © 2025 Seid Fikireselassie Eshetu. All rights reserved.
            </p>
            <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
                <li>
                  <a target='_blank' href='https://github.com/Seid-21' 
                  className={`transition-colors duration-300 hover:text-blue-500
                  ${isDarkMode ? 'text-white' : 'text-gray-700'}`}> 
                    Github
                  </a>  
                </li>
                <li>
                  <a target='_blank' href='https://www.linkedin.com/in/fikreselassie-seid/' 
                  className={`transition-colors duration-300 hover:text-blue-500
                  ${isDarkMode ? 'text-white' : 'text-gray-700'}`}> 
                    Linkedin
                  </a>  
                </li>
               
            </ul>
        </div>
    </div>
  )
}

export default Footer