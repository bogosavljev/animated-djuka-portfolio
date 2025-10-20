import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function Footer({isDarkMode}) {
  return (
    <div className="mt-20">
        <div className="text-center">
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Logo" className="w-20 mx-auto mb-2" />
            <div className="w-max flex items-center gap-2 mx-auto">
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="Mail Icon" className="w-6" />
                djurica.bogosavljev@gmail.com
            </div>
        </div>

        <div className="text-center text-sm sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
            <p className="text-center mt-4">&copy; 2025 Bogosavljev Djurica. All rights reserved.</p>
            <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0">
                <li><a target='_blank' href="https://github.com/bogosavljev">GitHub</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/bogosavljev/">LinkedIn</a></li>
                <li><a target='_blank' href="https://twitter.com/bogosavljev">Twitter</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
