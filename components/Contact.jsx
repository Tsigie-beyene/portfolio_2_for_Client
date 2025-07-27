import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useTheme } from '@/context/ThemeContext'
import { motion } from 'framer-motion'

const Contact = () => {
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
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  }

  return (
    <motion.div
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.h2
        className={`text-center text-3xl md:text-4xl lg:text-5xl font-Ovo mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
        variants={fadeUp}
      >
        Get In Touch
      </motion.h2>
      <motion.p
        className={`text-center max-w-2xl mx-auto mb-12 font-Ovo transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
        variants={fadeUp}
      >
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </motion.p>
      <motion.form
        className='max-w-2xl mx-auto'
        variants={container}
      >
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'
          variants={container}
        >
          <motion.input
            type="text"
            placeholder='Enter your name'
            required
            className={`w-full p-4 outline-none border rounded-lg transition-all duration-300 ${isDarkMode 
              ? 'border-gray-300 bg-dark-hover text-white placeholder-gray-300' 
              : 'border-gray-400 bg-light-hover text-gray-800 placeholder-gray-500'
            }`}
            variants={fadeUp}
          />
          <motion.input
            type="email"
            placeholder='Enter your email'
            required
            className={`w-full p-4 outline-none border rounded-lg transition-all duration-300 ${isDarkMode 
              ? 'border-gray-300 bg-dark-hover text-white placeholder-gray-300' 
              : 'border-gray-400 bg-light-hover text-gray-800 placeholder-gray-500'
            }`}
            variants={fadeUp}
          />
        </motion.div>
        <motion.textarea
          rows={6}
          placeholder='Enter your message'
          required
          className={`w-full p-4 outline-none border rounded-lg mb-8 transition-all duration-300 ${isDarkMode 
            ? 'border-gray-300 bg-dark-hover text-white placeholder-gray-300' 
            : 'border-gray-400 bg-light-hover text-gray-800 placeholder-gray-500'
          }`}
          variants={fadeUp}
        />
        <motion.div className='text-center' variants={fadeUp}>
          <motion.button
            type='submit'
            className={`py-3 px-8 flex items-center justify-center gap-2 mx-auto rounded-full transition-all duration-300 ${isDarkMode 
              ? 'border border-white text-white hover:bg-dark-hover' 
              : 'border border-gray-700 text-gray-700 hover:bg-light-hover'
            }`}
            whileHover={{ scale: 1.07 }}
            variants={fadeUp}
          >
            Submit now <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Arrow Icon" className="w-3"/>
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  )
}

export default Contact