import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();
    const openSideMenu = () => {
        sideMenuRef.current.style.transform = "translate(-16rem)";
    }
    const closeSideMenu = () => {
        sideMenuRef.current.style.transform = "translate(16rem)";
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        })
    }, [])

  return (
    <>
    <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="Header Background Color" className="w-full" />
    </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-[var(--bg-opacity-50)] backdrop-blur-lg shadow-[var(--shadow-white-20)] dark:bg-[var(--bg-opacity-50)] dark:shadow-[var(--shadow-white-20)]" : ""} transition duration-500`}>
        <a href="#top">
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} className="w-20 mr-14 cursor-pointer" alt="logo" />
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
            <li><a className="font-Ovo" href="#top">Home</a></li>
            <li><a className="font-Ovo" href="#about">About Me</a></li>
            <li><a className="font-Ovo" href="#services">Services</a></li>
            <li><a className="font-Ovo" href="#work">My Work</a></li>
            <li><a className="font-Ovo" href="#contact">Contact Me</a></li>
        </ul>
        <div className="flex items-center gap-4">
            <button onClick={() => setIsDarkMode(prev => !prev)} aria-label="Toggle Mode">
                <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Toggle Light/Dark Mode" className="w-6 cursor-pointer" />
            </button>
            <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-[var(--border-color)] rounded-full ml-4 font-Ovo bg-[var(--bg)] text-[var(--text)]">Let's Talk <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="arrow icon" className="w-3" /></a>
            <button className="block md:hidden ml-3" onClick={openSideMenu}>
                <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="menu icon" className="w-6" />
            </button>
        </div>

        {/*-- Mobile Menu --*/}

        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-[var(--sidebar-menu-bg)] text transition duration-500 dark:bg-[var(--sidebar-menu-bg)] dark:text" >
            <div className="absolute top-6 right-6 cursor-pointer" onClick={closeSideMenu}>
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="close icon" className="w-5 cursor-pointer" />
            </div>
            <li><a className="font-Ovo" onClick={closeSideMenu} href="#top">Home</a></li>
            <li><a className="font-Ovo" onClick={closeSideMenu} href="#about">About Me</a></li>
            <li><a className="font-Ovo" onClick={closeSideMenu} href="#services">Services</a></li>
            <li><a className="font-Ovo" onClick={closeSideMenu} href="#work">My Work</a></li>
            <li><a className="font-Ovo" onClick={closeSideMenu} href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
