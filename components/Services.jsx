import React from 'react'
import Image from 'next/image'
import { assets, serviceData } from '@/assets/assets'
import { useTheme } from '@/context/ThemeContext'
import { motion } from 'framer-motion'

const Services = () => {
  const { isDarkMode } = useTheme()

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

  return (
    <motion.div
      id="services"
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.h4
        className={`text-center mb-2 text-lg font-Ovo transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
        variants={fadeUp}
      >
        What I Offer
      </motion.h4>
      <motion.h2
        className={`text-center text-3xl md:text-4xl lg:text-5xl font-Ovo transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
        variants={fadeUp}
      >
        My Services
      </motion.h2>
      <motion.p
        className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
        variants={fadeUp}
      >
I offer services in robotics system design, embedded automation, and AI-driven control solutions. I also support research and prototyping for academic or industrial projects, and provide technical training in robotics, MATLAB, ROS, and embedded systems.      </motion.p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10"
        variants={container}
      >
        {serviceData.map(({icon,title,description,link},index)=>(
          <motion.div
            key={index}
            className={`border rounded-lg px-8 py-12 cursor-pointer hover:-translate-y-1 duration-500 transition-all ${isDarkMode 
              ? 'border-gray-600 hover:bg-dark-hover hover:shadow-custom-white' 
              : 'border-gray-400 hover:bg-light-hover hover:shadow-custom-black'
            }`}
            variants={fadeUp}
            whileHover={{ scale: 1.04 }}
          >
            <Image src={icon} alt={icon} className='w-10'/>
            <h3 className={`text-lg my-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>{title}</h3>
            <p className={`text-sm leading-5 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5 transition-colors duration-300 hover:text-blue-500'>
              Read More <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow} alt="Arrow Icon" className="w-4"/>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services    