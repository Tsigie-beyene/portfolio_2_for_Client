import { assets } from '@/assets/assets'
import React, { use } from 'react'
import Image from 'next/image'
import { useRef } from 'react'

const Navbar = () => {
    const sideMenuRef =useRef()
    const openMenu = () => {
        sideMenuRef.current.style.transform= 'translateX(-16rem)'
    }
     const closeMenu = () => {
        sideMenuRef.current.style.transform= 'translateX(16rem)'
    }




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
        <li><a href='#top'  className="hover:text-blue-500" >Home</a></li>
        <li><a href='#about'  className="hover:text-blue-500" >About Me </a></li>
        <li><a href='#services'  className="hover:text-blue-500" >Services</a></li>
        <li><a href='#work'  className="hover:text-blue-500" >My Work</a></li>
        <li><a href='#contact'  className="hover:text-blue-500" >Contact Me</a></li>
    </ul>
    <div className='flex items-center gap-4'>
        <button>
            <Image src={assets.moon_icon} alt='moon icon' className='w-6'/>
        </button>
        <a href="#contact" className='hidden md:flex items-center gap-3 px-10 py-2.5 border lg:text-base xl:text-lg font-semibold text-gray-700 rounded-full hover:bg-borf'>
Contact <Image src={assets.arrow_icon} alt="Arrow Icon" className="w-3"/></a>
     <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt='moon icon' className='w-6 hover:text-white-500'/>
        </button>  
    </div> 
    {/* Mobile Menu */}
    <ul  ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10  fixed -right-64
    top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
        <div className='absolute top-6 right-6'>
          <Image src={assets.close_black} alt='close icon' onClick={closeMenu}
        className='w-5 cursor-pointer'/>
        </div>
        <li><a onClick={closeMenu} className="hover:text-blue-500" href='#top'>Home</a></li>
        <li><a onClick={closeMenu}   className="hover:text-blue-500" href='#about'>About Me </a></li>
        <li><a onClick={closeMenu}  className="hover:text-blue-500" href='#services'>Services</a></li>
        <li><a onClick={closeMenu}  className="hover:text-blue-500" href='#work'>My Work</a></li>
        <li><a onClick={closeMenu}  className="hover:text-blue-500" href='#contact'>Contact Me</a></li> 
    </ul>
</nav>   
   </>
  )
}

export default Navbar
