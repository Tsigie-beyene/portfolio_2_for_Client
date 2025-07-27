import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useTheme } from '@/context/ThemeContext'
import { motion } from 'framer-motion'

const Contact = () => {
  const { isDarkMode } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
        console.error('Email sending failed:', result.error)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error sending email:', error)
    } finally {
      setIsLoading(false)
    }
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

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
        >
          Thank you for your message! I'll get back to you soon.
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
        >
          Sorry, there was an error sending your message. Please try again.
        </motion.div>
      )}

      <motion.form
        className='max-w-2xl mx-auto'
        variants={container}
        onSubmit={handleSubmit}
      >
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'
          variants={container}
        >
          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder='Enter your name'
            required
            disabled={isLoading}
            className={`w-full p-4 outline-none border rounded-lg transition-all duration-300 ${isDarkMode 
              ? 'border-gray-300 bg-dark-hover text-white placeholder-gray-300' 
              : 'border-gray-400 bg-light-hover text-gray-800 placeholder-gray-500'
            } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            variants={fadeUp}
          />
          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Enter your email'
            required
            disabled={isLoading}
            className={`w-full p-4 outline-none border rounded-lg transition-all duration-300 ${isDarkMode 
              ? 'border-gray-300 bg-dark-hover text-white placeholder-gray-300' 
              : 'border-gray-400 bg-light-hover text-gray-800 placeholder-gray-500'
            } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            variants={fadeUp}
          />
        </motion.div>
        <motion.textarea
          rows={6}
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder='Enter your message'
          required
          disabled={isLoading}
          className={`w-full p-4 outline-none border rounded-lg mb-8 transition-all duration-300 ${isDarkMode 
            ? 'border-gray-300 bg-dark-hover text-white placeholder-gray-300' 
            : 'border-gray-400 bg-light-hover text-gray-800 placeholder-gray-500'
          } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          variants={fadeUp}
        />
        <motion.div className='text-center' variants={fadeUp}>
          <motion.button
            type='submit'
            disabled={isLoading}
            className={`py-3 px-8 flex items-center justify-center gap-2 mx-auto rounded-full transition-all duration-300 ${isDarkMode 
              ? 'border border-white text-white hover:bg-dark-hover' 
              : 'border border-gray-700 text-gray-700 hover:bg-light-hover'
            } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            whileHover={!isLoading ? { scale: 1.07 } : {}}
            variants={fadeUp}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                Submit now <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Arrow Icon" className="w-3"/>
              </>
            )}
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  )
}

export default Contact