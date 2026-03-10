import React from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp, IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineMailOutline, MdOutlineLocalPhone } from "react-icons/md";

const TopLine = () => {
  return (
    <div className='w-full h-auto py-2 flex flex-col sm:flex-row items-center justify-center bg-white px-4 sm:px-6 md:px-10 lg:px-20'>
      {/* Contact Info */}
      <div className='flex flex-col sm:flex-row items-center justify-center w-full sm:w-auto'>
        <div className='cursor-pointer flex items-center text-red-900 text-sm sm:text-base md:text-lg xl:text-xl mb-2 sm:mb-0 sm:mr-5'>
          <MdOutlineMailOutline className='mr-1' />
          <p className='text-xs sm:text-sm md:text-base mr-3'>himanshig.smiley@gmail.com</p>
        {/* </div> */}
        {/* <div className='cursor-pointer flex items-center text-red-900 text-sm sm:text-base md:text-lg xl:text-xl'> */}
          <MdOutlineLocalPhone className='mr-1' />
          <p className='text-xs sm:text-sm md:text-base'>+91-8383977648</p>
        </div>
      </div>
      
      {/* Social Media Links */}
      <div className='flex items-center justify-center mt-2 sm:mt-0'>
        <a href="https://wa.me/918383977648" target="_blank" rel="noopener noreferrer" className='cursor-pointer mx-2 text-green-900 text-lg sm:text-xl md:text-2xl'>
          <IoLogoWhatsapp />
        </a>
        <a href="https://www.instagram.com/gl.industries/?hl=en" target="_blank" rel="noopener noreferrer" className='cursor-pointer mx-2 text-pink-900 text-lg sm:text-xl md:text-2xl'>
          <IoLogoInstagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61573553008771" target="_blank" rel="noopener noreferrer" className='cursor-pointer mx-2 text-blue-700 text-lg sm:text-xl md:text-2xl'>
          <IoLogoFacebook />
        </a>
        <a href="https://www.linkedin.com/in/g-l-industries-385165303/" target="_blank" rel="noopener noreferrer" className='cursor-pointer mx-2 text-blue-700 text-lg sm:text-xl md:text-2xl'>
          <IoLogoLinkedin />
        </a>
      </div>
    </div>
  );
}

export default TopLine;
