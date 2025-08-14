"use client"
import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='Logo' className='w-30 mx-auto mb-2' />

        <div className='w-max mx-auto flex items-center gap-2'>
           <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='Mail Icon' className='w-6' />
           oliviaoguelina@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Olivia Oguelina. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mmt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/L-i-v-i-a">Github</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/olivia-oguelina-95a0772a4/">LinkedIn</a></li>
            <li><a target='_blank' href="https://wa.me/2348121115585?text=I'm%20interested%20in%20working%20with%20you">WhatsApp</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
