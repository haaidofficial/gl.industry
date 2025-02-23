import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp, IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

const TopLine = () => {
  return (
    <div className='w-full h-12 flex items-center justify-center bg-white '>
      <div className='flex h-[100%] items-center justify-center'>
        <div className='cursor-pointer ml-0'>
          <span className='flex items-center text-red-900 xl:text-2xl md:text-2xl'>
            <MdOutlineMailOutline /> <p className='xl:text-[16px] md:text-[12px] sm:text-[12px] text-[12px] ml-0'> glrs.smiley@gmail.com</p>
          </span>

        </div>
        <div className='flex cursor-pointer ml-5'>
          <span className='flex items-center justify-center text-red-900 xl:text-2xl md:text-2xl'>
            <MdOutlineLocalPhone />
            <p className='xl:text-[16px] md:text-[12px] sm:text-[12px] text-[12px] '>+91-8383977648</p>
          </span>
        </div>

      </div>

      <div className='flex items-center justify-center px-1 ml-1'>
        <div className='cursor-pointer ml-0'>
          <a
            href="https://wa.me/8383977648"
            className="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp className='mr-2 text-green-900 xl:text-2xl md:text-2xl' />
          </a>
        </div>
        <div className='cursor-pointer ml-2'>
          <a href="https://www.instagram.com/gl.industries/?hl=en"><IoLogoInstagram className='mr-2 text-pink-900 xl:text-2xl md:text-2xl' /> </a>
        </div>
        <div className='cursor-pointer ml-2'>
          <IoLogoFacebook className='mr-2 text-blue-700 xl:text-2xl md:text-2xl' />
        </div>
        <div className='cursor-pointer ml-2'>
          <a href="https://linkedin.com/in/g-l-industries-9624a031b"><IoLogoLinkedin className='mr-2 text-blue-700 xl:text-2xl md:text-2xl' /></a>
        </div>
      </div>
    </div>
  )
}

export default TopLine
