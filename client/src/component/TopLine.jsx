import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";

const TopLine = () => {
  return (
    <div>
       <div className='flex '>
            <div className='text-black cursor-pointer ml-0' ><span className='mr-2 text-sm '><IoLogoWhatsapp /></span> </div>
            <div className='text-black cursor-pointer ml-5'><span className='mr-2 text-sm'><IoLogoInstagram  /></span></div>
            <div className='text-black cursor-pointer ml-5'><span className='mr-2 text-sm'><IoLogoFacebook /></span></div>
          </div>
    </div>
  )
}

export default TopLine
