import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { useTheme } from '@/context/ThemeContext'
import { motion } from 'framer-motion'

const Footer = () => {
  const { isDarkMode } = useTheme()

  // Animation variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.13
      }
    }
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  }

  return (
    <motion.div
      className='mt-20'
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.div className='text-center' variants={fadeUp}>
        <div className="flex items-center justify-center gap-1 mb-2">
          <span className={`text-2xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Seid
          </span>
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        </div>
        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="mail icon" className="w-6"/>
          <span className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
            fikreselassieeshetu.seid@etud.univ-evry.fr
          </span>
        </div>
      </motion.div>
      <motion.div
        className={`text-center sm:flex items-center justify-between border-t mx-[10%] py-6 mt-6 transition-all duration-300 ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}
        variants={container}
      >
        <motion.p
          className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
          variants={fadeUp}
        >
          © 2025 Seid Fikireselassie Eshetu. All rights reserved.
        </motion.p>
        <motion.ul
          className='flex items-center justify-center gap-10 mt-4 sm:mt-0'
          variants={container}
        >
          <motion.li variants={fadeUp}>
            <motion.a
              target='_blank'
              href='https://github.com/Seid-21'
              className={`transition-colors duration-300 hover:text-blue-500 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}
              whileHover={{ scale: 1.08 }}
            >
              Github
            </motion.a>
          </motion.li>
          <motion.li variants={fadeUp}>
            <motion.a
              target='_blank'
              href='https://www.linkedin.com/in/fikreselassie-seid/'
              className={`transition-colors duration-300 hover:text-blue-500 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}
              whileHover={{ scale: 1.08 }}
            >
              Linkedin
            </motion.a>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  )
}

export default Footer