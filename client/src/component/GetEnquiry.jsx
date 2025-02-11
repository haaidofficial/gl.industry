import React from 'react'
import { Link } from 'react-router-dom'

const GetEnquiry = () => {
    return (
        <div className='cursor-pointer bg-red-900 text-white font-serif fixed xl:text-[18px] shadow-gray-600 shadow-md md:text-sm sm:text-sm text-sm rounded-full  z-10 bottom-5 right-5'>
            <Link to='/contactUs' >
               <p className='xl:p-5 md:p-5 sm:p-2 p-2'> Get Enquiry</p>
            </Link>
        </div>
    )
}

export default GetEnquiry
