import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl mx-auto text-center max-auto h-screen flex flex-col justify-center items-center gap-4'>
        <div>
            <Image src={assets.fikiru} alt="Profile Image" className="rounded-full w-32"/>
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl font-semibold mb-3 font-Ovo'>
            Hi! I'm Seid Fikreselassie 😊 

        </h3>
        <h1 className='text-2xl lg:text-4xl xl:text-[36px] font-Ovo'>
        Robotics & Control Master’s Student | Human-Robot Interaction | Mechatronics Engineer </h1>
        <p className='max-w-3xl mx-auto font-Ovo text-gray-500'>
        I’m Seid Fikreselassie, a Master’s student in Automatic Control and Robotics, with a strong background in Mechatronics and hands-on experience in human-robot interaction and intelligent control. I’m passionate about building smart, autonomous, and human-centered robotic systems. 
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
          <a href="#contact"
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>
          Contact Me 
          <Image src={assets.right_arrow_white } alt="right arrow" className='w-4'/>
          </a>
          <a href="sample-resume.pdf" download 
          className='px-10 py-3 border border rounded-full border-gray-500 flex items-center gap-2 hover:bg-light-hover hover:text-blue-500'>
            My Resume <Image src={assets.download_icon} alt="Download Icocn" className='w-4'/>
          </a>
        </div>
    </div>
  )
  
}

export default Header