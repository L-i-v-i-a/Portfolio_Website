"use client"
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'


const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)"
    }
     const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)"
    }
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        });
    }, []);
  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt="header background" className='w-full' />
    </div>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex item-center justify-between z-50 ${isScroll ? ' bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-[var(--dark-theme--)] dark:shadow-white/20' : 'bg-transparent'}`}>
        <a href="#top">
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Logo" className='w-21 dark:w-14 cursor-pointer mr-14' />
        </a>

        <ul className={`hidden md:flex item-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : 'bg-opacity-50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent'}`}>
            <li><a className='font-ovo' href="#top">Home</a></li>
            <li><a className='font-ovo' href="#about">About Me</a></li>
            <li><a className='font-ovo' href="#services">Services</a></li>
            <li><a className='font-ovo' href="#projects">My Projects</a></li>
            <li><a className='font-ovo' href="#testimonials">Testimonials</a></li>
            <li><a className='font-ovo' href="#contact">Contact Me</a></li>
        </ul>
        <div className='flex items-center gap-4 cursor-pointer'>
            <button onClick={() => setIsDarkMode(prev => !prev)}>
                <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Moon Icon"  className='w-6 cursor-pointer'/>
            </button>
            <a href="#contact" className='hidden lg:flex items-center gap-3 font-ovo px-10 p-2.5 border border-gray-500 rounded-full ml-4 '>Contact
                <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Arrow" className='w-3' />
            </a>

            <button onClick={openMenu} className='block cursor-pointer md:hidden ml-3'>
                <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="menu-black"  className='w-6'/>
            </button>
        </div>
        {/*----mobile menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-[var(--darkHover--)] dark:text-white'>
            <div className='absolute right-6 top-6 cursor-pointer ' onClick={closeMenu}>
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='close' className='w-5 cursor-pointer'/>
            </div>
            <li><a className='font-ovo' onClick={closeMenu} href="#top">Home</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href="#about">About Me</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href="#services">Services</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href="#testimonials">Testimonials</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href="#projects">My Projects</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href="#contact">Contact Me</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
