import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

function About({isDarkMode}) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-center mb-2 text-lg font-Ovo">Introduction</motion.h4>
      <motion.h2 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="text-center text-5xl font-Ovo">About Me</motion.h2>
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col w-full lg:flex-row items-center gap-20 my-20">
        <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-64 sm:w-80 rounded-3xl max-w-none">
            <Image src={assets.user_image} alt="User Image" className="w-full rounded-2xl" />
        </motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex-1">
            <p className="mb-10 max-w-2xl font-Ovo">
                I'm an a experienced UI Developer with a passion for creating visually stunning and user-friendly web applications. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive and interactive interfaces that enhance user experiences.
            </p>
            <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                {infoList.map(({icon, iconDark, title, description}, index) => (
                    <motion.li
                    whileHover={{ scale: 1.05 }}
                    key={index} className="border-[0.5px] border-[var(--border-color)] rounded-xl p-6 cursor-pointer hover:bg-[var(--card-hover-bg)] hover:shadow-[var(--shadow-dark)] hover:-translate-y-1 duration-500 dark:hover:shadow-[var(--light-shadow)] dark:hover:bg-[var(--card-hover-bg)]">
                        <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3" />
                        <h3 className="my-4 font-semibold text-[var(--text-700)] dark:text-[var(--text-700)]">{title}</h3>
                        <p className="text-[var(--text-600)] text-sm dark:text-[var(--text-white-80)]">{description}</p>
                    </motion.li>
                ))}
            </motion.ul>
            <motion.h4 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="my-6 text-[var(--text-700)] font-Ovo dark:text-[var(--text-white-80)]">
                Tools I use
            </motion.h4>
            <motion.ul 
            initial={{ y: 20,opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex items-center gap-3 sm:gap-5">
                {toolsData.map((tool, index) => (
                    <motion.li 
                    whileHover={{ scale: 1.1}}
                    className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" key={index}>
                        <Image src={tool} alt="Tool" className="w-10 sm:w-7" />
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
