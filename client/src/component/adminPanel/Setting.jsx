import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Setting = () => {

     const navigate = useNavigate(); // Initialize navigation
    
        useEffect(() => {
            // Check for token in local storage
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/admin/login'); // Redirect to login if token is not found
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, [navigate]);

  


    return (
        <>
            <div className='w-full h-[90vh] relative'>
                <div className='mt-5'>

                    <Link to='/dashboard' className='ml-10 px-4 text-[1.2rem]  py-1 rounded-none bg-[#1f2937] text-white'>Back</Link>
                </div>
                {/* <div className='w-full h-[70vh] flex items-center justify-center text-[8rem] font-bold text-gray-400 relative'>
                  Setting
                </div> */}
                <div>
                    <div className='ml-5 mt-10 '>
                        <Link className="border px-5 py-5 bg-[#374151] text-white" to="/slider-handle">
                         Slider Setting
                        </Link>
                        <Link className="border px-5 py-5 bg-[#374151] text-white" to="/signup">
                         Create User
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Setting
