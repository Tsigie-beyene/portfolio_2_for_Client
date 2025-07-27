import { assets } from '@/assets/assets'
import React, { use, useEffect,useState } from 'react'
import Image from 'next/image'
import { useRef } from 'react'
import { useTheme } from '@/context/ThemeContext'

const Navbar = () => {
    const [isScrolled,setIsScrolled] = useState(false)
    const sideMenuRef =useRef()
    const { isDarkMode, toggleTheme } = useTheme()
    
    const openMenu = () => {
        sideMenuRef.current.style.transform= 'translateX(-16rem)'
    }
     const closeMenu = () => {
        sideMenuRef.current.style.transform= 'translateX(16rem)'
    }
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            
            if(scrollY > 50){
                setIsScrolled(true)
        } else{
            setIsScrolled(false)
        }
    })
    },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
    <Image src={assets.header_bg_color} alt='header background' className='w-full' />

    </div>
<nav className={`w-full fixed px-5 lg:px-8 xl:px:[8%] py-4 flex items-center justify-between 
z-50 transition-all duration-300
${isDarkMode 
  ? isScrolled 
    ? 'bg-dark-theme bg-opacity-50 backdrop-blur-lg border-b border-gray-700'
    : 'bg-dark-theme bg-opacity-50 backdrop-blur-lg shadow-sm'
  : isScrolled 
    ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm'
    : 'bg-white'
}`}>
    <a href='#top' className="flex items-center gap-1">
        <span className={`text-2xl font-bold transition-colors duration-300
        ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          Seid
        </span>
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
    </a>
    <ul className={`hidden md:flex items-center gap-6 lg:gap-10 xl:gap-14 text-sm lg:text-base xl:text-lg 
    font-semibold py-3 px-12 rounded-full transition-all duration-300
    ${isDarkMode 
      ? isScrolled 
        ? 'text-white bg-dark-theme bg-opacity-50' // dark, scrolled: no border
        : 'text-white bg-dark-theme bg-opacity-50 shadow-sm border border-white rounded-full' // dark, top: border
      : isScrolled 
        ? 'text-gray-700 bg-white bg-opacity-50' // light, scrolled
        : 'text-gray-700 bg-white bg-opacity-50 shadow-sm' // light, top
    }`}>
        <li><a href='#top' className={`hover:text-blue-500 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Home</a></li>
        <li><a href='#about' className={`hover:text-blue-500 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>About Me </a></li>
        <li><a href='#services' className={`hover:text-blue-500 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Services</a></li>
        <li><a href='#work' className={`hover:text-blue-500 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>My Work</a></li>
        <li><a href='#contact' className={`hover:text-blue-500 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Contact Me</a></li>
    </ul>
    <div className='flex items-center gap-4'>
        <button onClick={toggleTheme} className='transition-transform duration-300 hover:scale-110 cursor-pointer'>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='theme toggle icon' className='w-6'/>
        </button>
        <a href="#contact" className={`hidden md:flex items-center gap-3 px-10 py-2.5 border lg:text-base xl:text-lg font-semibold rounded-full transition-all duration-300
        ${isDarkMode 
          ? 'text-white border-white hover:bg-dark-hover' 
          : 'text-gray-700 border-gray-700 hover:bg-light-hover'
        }`}>
       Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Arrow Icon" className="w-3"/></a>
     <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='menu icon' className='w-6 hover:text-white-500 '/>
        </button>  
    </div> 
    {/* Mobile Menu */}
    <ul  ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
    top-0 bottom-0 w-64 z-50 h-screen transition-all duration-500
    ${isDarkMode 
      ? 'bg-dark-hover bg-opacity-90 text-white' 
      : 'bg-rose-50 text-gray-700'
    }`}>
        <div className='absolute top-6 right-6'>
          <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='close icon' onClick={closeMenu}
        className='w-5 cursor-pointer'/>
        </div>
        <li><a onClick={closeMenu} className={`hover:text-blue-500 transition-colors duration-300 ${isDarkMode ? 'text-white hover:text-blue-500 ' : 'text-gray-700'}`} href='#top'>Home</a></li>
        <li><a onClick={closeMenu} className={`hover:text-blue-500 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} href='#about'>About Me </a></li>
        <li><a onClick={closeMenu} className={`hover:text-blue-500 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} href='#services'>Services</a></li>
        <li><a onClick={closeMenu} className={`hover:text-blue-500 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} href='#work'>My Work</a></li>
        <li><a onClick={closeMenu} className={`hover:text-blue-500 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} href='#contact'>Contact Me</a></li> 
    </ul>
</nav>   
   </>
  )
}

export default Navbar