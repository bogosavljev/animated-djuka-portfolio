import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

function Services() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="text-center mb-2 text-lg font-Ovo">What I offer</motion.h4>
      <motion.h2 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="text-center mb-5 text-5xl font-Ovo">My Services</motion.h2>
      <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className="text-center mt-5 mb-12 max-w-2xl mx-auto font-Ovo">
        I'm currently offering a range of services to help you create stunning and user-friendly web applications.
        Also, I'm open to freelance opportunities and collaborations.
      </motion.p>
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.6 }}
      className="grid grid-cols-[var(--grid-auto)] gap-6 my-10">
        {serviceData.map(({icon, title, description, link}, index) => (
            <motion.div 
            whileHover={{ scale: 1.05 }}
            key={index} className="border border-[var(--border-color)] rounded-lg cursor-pointer shadow-md px-8 py-12 hover:shadow-[var(--shadow-dark)] hover:bg-[var(--hover-bg)] hover:-translate-y-1 duration-500 dark:hover:shadow-[var(--light-shadow)] dark:hover:bg-[var(--card-hover-bg)]">
                <Image src={icon} alt={title} className="w-10" />
                <h3 className="text-lg my-4 text-[var(--text-700)] dark:text-[var(--text-700)]">{title}</h3>
                <p className="text-sm text-[var(--text-600)] dark:text-[var(--text-white-80)] leading-5">{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm mt-5">Read more <Image src={assets.right_arrow} alt="Right Arrow" className="w-4" /></a>
            </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
