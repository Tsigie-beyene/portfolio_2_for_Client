import { assets, infoList, toolsData } from '@/assets/assets'
import React, { useRef } from 'react'
import Image from 'next/image'
import { useTheme } from '@/context/ThemeContext'
import { motion, useInView } from 'framer-motion'

const about = () => {
  const { isDarkMode } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Animation variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  }
  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  }
  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  }

  return (
    <motion.div
      id='about'
      className='w-full px-[12%] py-20 scroll-mt-20'
      ref={ref}
      initial='hidden'
      animate={isInView ? 'show' : 'hidden'}
      variants={container}
    >
      <motion.h4
        className={`hidden md:block text-center mb-2 text-lg font-Ovo transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
        variants={fadeUp}
      >
        Introduction
      </motion.h4>
      <motion.h2
        className={`text-center text-3xl md:text-4xl lg:text-5xl font-Ovo transition-colors duration-300 ${isDarkMode ? 'text-white' :'text-gray-800'}`}
        variants={fadeUp}
      >
        About Me
      </motion.h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-15 my-10'>
        <motion.div
          className='w-64 sm:w-80 rounded-3xl max-w-none'
          variants={fadeLeft}
        >
          <Image src={assets.fik} alt="user" className="w-full rounded-3xl" />
        </motion.div>
        <motion.div className='flex-1' variants={fadeRight}>
          <motion.p
            className={`mb-10 max-w-2xl font-Ovo transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            variants={fadeUp}
          >
I am a dedicated Mechatronics Engineer with a strong background in robotics, automation, and advanced control systems. My experience
spans mechanical design, electronics, and software integration, enabling me to tackle complex technical challenges. I value continuous
learning, teamwork, and creativity, striving to deliver innovative solutions in every project. With an eye for detail and a commitment to
excellence, I thrive on pushing boundaries to achieve success.
          </motion.p>
          {/* Info Cards Section - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* First row: Languages and Projects */}
            <div className="flex flex-col gap-6 sm:flex-row sm:col-span-2">
              {/* Languages */}
              <motion.div
                className={`flex-1 border-[0.5px] rounded-xl p-6 cursor-pointer transition-all duration-500 hover:-translate-y-1 ${isDarkMode ? 'border-gray-600 hover:bg-dark-hover hover:shadow-custom-white' : 'border-gray-400 hover:bg-light-hover hover:shadow-custom-black'}`}
                variants={fadeUp}
                whileHover={{ scale: 1.04 }}
              >
                <Image src={isDarkMode ? infoList[0].iconDark : infoList[0].icon} alt={infoList[0].title} className='w-7 mt-3'/>
                <h3 className={`my-4 font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>{infoList[0].title}</h3>
                <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{infoList[0].description}</p>
              </motion.div>
              {/* Projects */}
              <motion.div
                className={`flex-1 border-[0.5px] rounded-xl p-6 cursor-pointer transition-all duration-500 hover:-translate-y-1 ${isDarkMode ? 'border-gray-600 hover:bg-dark-hover hover:shadow-custom-white' : 'border-gray-400 hover:bg-light-hover hover:shadow-custom-black'}`}
                variants={fadeUp}
                whileHover={{ scale: 1.04 }}
              >
                <Image src={isDarkMode ? infoList[2].iconDark : infoList[2].icon} alt={infoList[2].title} className='w-7 mt-3'/>
                <h3 className={`my-4 font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>{infoList[2].title}</h3>
                <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{infoList[2].description}</p>
              </motion.div>
            </div>
            {/* Second row: Education (spans both columns) */}
            <motion.div
              className={`sm:col-span-2 border-[0.5px] rounded-xl p-6 cursor-pointer transition-all duration-500 hover:-translate-y-1 ${isDarkMode ? 'border-gray-600 hover:bg-dark-hover hover:shadow-custom-white' : 'border-gray-400 hover:bg-light-hover hover:shadow-custom-black'}`}
              variants={fadeUp}
              whileHover={{ scale: 1.04 }}
            >
              <Image src={isDarkMode ? infoList[1].iconDark : infoList[1].icon} alt={infoList[1].title} className='w-7 mt-3'/>
              <h3 className={`my-4 font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>{infoList[1].title}</h3>
              <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{infoList[1].description}</p>
            </motion.div>
          </div>
          <motion.h4
            className={`my-6 font-Ovo transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}
            variants={fadeUp}
          >
            Tools I Use
          </motion.h4>
          <motion.ul
            className='flex items-center gap-3 sm:gap-5'
            variants={container}
            initial='hidden'
            animate={isInView ? 'show' : 'hidden'}
          >
            {toolsData.map((tool,index)=>(
              <motion.li
                className={`flex items-center justify-center w-12 sm:w-14 aspect-square border rounded-lg cursor-pointer hover:-translate-y-1 transition-all duration-500 ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.08 }}
              >
                <Image src={tool} alt={tool} className='w-5 sm:w-7'/>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default about