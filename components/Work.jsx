import React from 'react'
import { workData,assets } from '@/assets/assets'
import Image from 'next/image'
import { useTheme } from '@/context/ThemeContext'

const Work =()=>{
    const { isDarkMode } = useTheme()
    
    return(
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
       <h4 className={`text-center mb-2 text-lg font-Ovo transition-colors duration-300
       ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>My Portfolio</h4>
        <h2 className={`text-center text-3xl md:text-4xl lg:text-5xl font-Ovo transition-colors duration-300
        ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>My Latest Work</h2>
        <p className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo transition-colors duration-300
        ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
           Welcome to my web development portfolio! Explore a collection of
           projects that showcase my skills and expertise in Mechatronics Engineering.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {workData.map((project,index)=>(
                <div key={index} 
                className='aspect-square bg-cover bg-center rounded-lg relative cursor-pointer group'
                style={{backgroundImage: `url(${project.bgImage})`}}>
                    <div className={`w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2
                    py-3 px-5 flex items-center justify-between shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:bottom-7
                    ${isDarkMode ? 'bg-white/80' : 'bg-white/90'}`}>
                        <div >
                            <h2 className={`text-base font-semibold transition-colors duration-300
                            ${isDarkMode ? 'text-gray-900' : 'text-gray-800'}`}>{project.title}</h2>
                            <p className={`text-sm transition-colors duration-300
                            ${isDarkMode ? 'text-gray-700' : 'text-gray-700'}`}>{project.description}</p>  
                        </div >
                        <div className={`border rounded-full w-9 aspect-square flex items-center justify-center
                        transition-all duration-300 group-hover:bg-lime-300
                        ${isDarkMode 
                          ? 'border-white shadow-[2px_2px_0_#fff]' 
                          : 'border-black shadow-[2px_2px_0_#000]'
                        }`}>
                        <Image src={assets.send_icon} alt="Send Icon" className='w-5 h-5'/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <a href='' className={`w-max flex items-center justify-center gap-2 rounded-full py-3 px-10 mx-auto my-20 transition-all duration-300
        ${isDarkMode 
          ? 'text-white border-white hover:bg-dark-hover' 
          : 'text-gray-700 border-gray-700 hover:bg-light-hover'
        } border-[0.5px]`}>
      Show More <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="Right Arrow"/>
        </a>



        </div>
    )
}
export default Work