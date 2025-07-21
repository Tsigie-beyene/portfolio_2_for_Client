import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
    <Image src={assets.header_bg_color} alt='header background' className='w-full' />

    </div>
<nav className='w-full fixed px-5 lg:px-8 xl:px:[8%] py-4 flex items-center justify-between bg-white z-50 shadow-md'>
    <a href='#top'>
        <Image src={assets.seid} alt='logo' className="w-28 cursor-pointer mr-14"/>
    </a>
    <ul className='hidden md:flex items-center gap-6 lg:gap-10 xl:gap-14 text-sm lg:text-base xl:text-lg font-semibold text-gray-700'>
        <li><a href='#top'>Home</a></li>
        <li><a href='#about'>About Me </a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#work'>My Work</a></li>
        <li><a href='#contact'>Contact Me</a></li>
    </ul>
    <div className='flex items-center gap-4'>
        <button>
            <Image src={assets.moon_icon} alt='moon icon' className='w-6'/>
        </button>
        <a href="#contact" className='hidden md:flex items-center gap-3 px-10 py-2.5 border lg:text-base xl:text-lg font-semibold text-gray-700 rounded-full'>
Contact <Image src={assets.arrow_icon} alt="Arrow Icon" className="w-3"/></a>
    </div>
</nav>   
   </>
  )
}

export default Navbar
