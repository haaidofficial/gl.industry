import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

const TopLine = () => {
  return (
    <div className='w-full h-12 flex items-center justify-center bg-white '>
      <div className='flex h-[100%] items-center justify-center'>
        <div className='cursor-pointer ml-0'>
          <span className='flex items-center mr-2 text-red-900 xl:text-2xl md:text-2xl'>
            <MdOutlineMailOutline /> <p className='xl:text-[16px] md:text-[12px] sm:text-[12px] text-[12px] ml-2'> glrs.smiley@gmail.com</p>
          </span>

        </div>
        <div className='flex cursor-pointer ml-5'>
          <span className='flex items-center justify-center mr-2 text-red-900 xl:text-2xl md:text-2xl'>
            <MdOutlineLocalPhone />
            <p className='xl:text-[16px] md:text-[12px] sm:text-[12px] text-[12px] ml-2'>+91-8383977648</p>
          </span>
        </div>

      </div>

      <div className='flex items-center justify-center px-2 ml-0'>
        <div className='cursor-pointer ml-0'>
         
            <IoLogoWhatsapp className='mr-2 text-red-900 xl:text-2xl md:text-2xl' />
         
        </div>
        <div className='cursor-pointer ml-2'>
         
            <IoLogoInstagram className='mr-2 text-red-900 xl:text-2xl md:text-2xl'/>
         
        </div>
        <div className='cursor-pointer ml-2'>
          
            <IoLogoFacebook className='mr-2 text-red-900 xl:text-2xl md:text-2xl'/>
         </div>
      </div>
    </div>
  )
}

export default TopLine
