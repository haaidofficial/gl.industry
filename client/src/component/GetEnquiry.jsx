import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineMailOutline } from "react-icons/md";


const GetEnquiry = () => {
    return (
        <div className='w-fit cursor-pointer bg-[#278c6e] transition-all font-serif fixed xl:text-[18px] text-[#278c6e] shadow-gray-600 shadow-md md:text-sm sm:text-sm text-sm rounded-full z-10 bottom-5 right-2'>
            <Link to='/contactUs' className='flex items-center justify-center px-3 py-2'>
            <div className='p-1 bg-white rounded-full mr-1'><MdOutlineMailOutline className='  text-[1.8rem]' /></div>   <p className='text-[1.3rem] text-white'>Enquiry</p>
            </Link>
        </div>
    )
}

export default GetEnquiry
