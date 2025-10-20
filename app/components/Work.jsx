import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

function Work({isDarkMode}) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="text-center mb-2 text-lg font-Ovo">My Porfolio</motion.h4>
      <motion.h2 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="text-center mb-5 text-5xl font-Ovo">My Latest Work</motion.h2>
      <motion.p 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className="text-center mt-5 mb-12 max-w-2xl mx-auto font-Ovo">
        Welcome to my web development portfolio! Here, you'll find a selection of my recent projects that showcase my skills and expertise in creating dynamic and user-friendly websites.  
        Feel free to explore and see how I can bring your ideas to life through innovative web solutions.
      </motion.p>
      <motion.div 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.6 }}
      className="grid grid-cols-[var(--grid-auto)] gap-5 dark:text-black">
        {workData.map((project, index) => (
            <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index} style={{backgroundImage: `url(${project.bgImage})`}} className="aspect-square bg-cover bg-center rounded-lg cursor-pointer relative group">
                <div className="bg-white w-10/12 absolute rounded-md bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex justify-between items-center duration-500 group-hover:bottom-7">
                    <div>
                        <h2 className="font-semibold">{project.title}</h2>
                        <p className="text-sm text-gray-700">{project.description}</p>
                    </div>
                    <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition duration-500">
                        <Image src={assets.send_icon} alt="Send Icon" className="w-5" />
                    </div>
                </div>
            </motion.div>
        ))}
      </motion.div>
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.a 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        href="" className="w-max flex items-center justify-center gap-2 text-[var(--text-700)] border-[0.5px] border-[var(--border-color-400)] rounded-full py-3 px-10 mx-auto my-20 hover:bg-[var(--hover-bg)] duration-500 dark:text-[var(--text-700)] dark:border-[var(--border-color)] dark:hover:border-[var(--border-color-white)] dark:hover:bg-[var(--card-hover-bg)]">
            Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="Right Arrow Icon" className="w-4" />
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

export default Work
