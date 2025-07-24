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
            Hi! I'm Seid Fikreselassie <Image src={assets.hand_icon} alt="Hand Icon" className="w-6"/>

        </h3>
        <h1 className='text-3xl lg:text-4xl xl:text-[36px] font-Ovo'>
        Robotics & Control Master’s Student | Human-Robot Interaction | Mechatronics Engineer        </h1>
        <p className='max-w-2xl mx-auto font-Ovo text-gray-500'>
        I’m Seid Fikreselassie, a Master’s student in Automatic Control and Robotics, with a strong background in Mechatronics and hands-on experience in human-robot interaction and intelligent control. I’m passionate about building smart, autonomous, and human-centered robotic systems.        </p>
    </div>
  )
}

export default Header