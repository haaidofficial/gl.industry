import React, { useEffect } from 'react'
import nyssa from '../assets/clientsImages/nyssa.png'
import Vishal from '../assets/clientsImages/Vishal-MegaMart.png'
import ss from '../assets/clientsImages/shoppers-stop.png'
import vmart from '../assets/clientsImages/v-mart.jfif'
import citycart from '../assets/clientsImages/citycart.webp'
import cantabil from '../assets/clientsImages/CANTABIL.NS_BIG-6d1e382a.png'
import relaince from '../assets/clientsImages/reliance-retail-logo.png'
import v2 from '../assets/clientsImages/v2.jpg'
import cobb from '../assets/clientsImages/cobb.png'
import udan from '../assets/clientsImages/udan.png'
import flipKart from '../assets/clientsImages/flipkart.webp'
import amazon from '../assets/clientsImages/amazon.png'
import business99 from '../assets/clientsImages/99business.png'
import GetEnquiry from '../component/GetEnquiry'

const Partners = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    return (
        <>
            <div className='w-full xl:h-[50vh] md:h-[50vh] sm:h-[30vh] h-[30vh] backgroundImagePartners mb-10'>
                <div className='w-full h-[100%] flex justify-end items-center flex-col overlayOtherPage '>
                    <h1 className='text-[6vmax] font-bold text-white text-justify textShadow mb-0 font-serif'>Our 
                        <span className='text-blue-300 '> Partner's</span></h1>
                </div>
            </div>
            <p className="ml-8 font-bold text-center xl:text-[28px] md:text-[28px] sm:text-[18px] text-[18px] text-red-900 italic paraTextShadow">Our Esteemed Customers</p>
            <div className='w-full flex justify-center mb-10'>
                <div className='w-[95%] h-fit py-5 flex justify-center flex-wrap gap-6 '>
                    <div className="w-44 h-40 object-contain hover:transition-all hover:scale-105  border shadow-md rounded-xl shadow-black p-1" >
                        <img src={Vishal} className="w-[100%] h-[100%] rounded-xl" alt="" />
                    </div>
                    <div className="w-44 h-40 object-contain hover:transition-all hover:scale-105  border shadow-md rounded-xl shadow-black p-1" >
                        <img src={relaince} className="w-[100%] h-[100%] rounded-xl" alt="" />
                    </div>
                    <div className="w-44 h-40 object-contain hover:transition-all hover:scale-105  border shadow-md rounded-xl shadow-black p-1" >
                        <img src={vmart} className="w-[100%] h-[100%] rounded-xl" alt="" />
                    </div>
                    <div className="w-44 h-40 object-contain hover:transition-all hover:scale-105  border shadow-md rounded-xl shadow-black p-1" >
                        <img src={ss} className="w-[100%] h-[100%] rounded-xl" alt="" />
                    </div>
                    <div className="w-44 h-40 object-contain hover:transition-all hover:scale-105  border shadow-md rounded-xl shadow-black p-1" >
                        <img src={citycart} className="w-[100%] h-[100%] rounded-xl" alt="" />
                    </div>
                    <div className="w-44 h-40 object-contain hover:transition-all hover:scale-105  border shadow-md rounded-xl shadow-black p-1" >
                        <img src={cantabil} className="w-[100%] h-[100%] rounded-xl" alt="" />
                    </div>

                    <div className="w-44 h-40 object-contain hover:transition-all hover:scale-105  border shadow-md rounded-xl shadow-black p-1" >
                        <img src={v2} className="w-[100%] h-[100%] rounded-xl" alt="" />
                    </div>
                    <div className="w-44 h-40 object-contain hover:transition-all hover:scale-105  border shadow-md rounded-xl shadow-black p-1" >
                        <img src={cobb} className="w-[100%] h-[100%] rounded-xl" alt="" />
                    </div>
                    <div className="w-48 h-40 object-contain hover:transition-all hover:scale-105  border shadow-md rounded-xl shadow-black p-1" >
                        <img src={nyssa} className="w-[100%] h-[100%] rounded-xl" alt="" />
                    </div>
                    {/* <div className="w-52 h-40 object-contain hover:transition-all hover:scale-105  border shadow-md rounded-xl shadow-black p-1" >
                        <img src={udan} className="w-[100%] h-[100%] rounded-xl" alt="" />
                    </div>
                    <div className="w-44 h-40 object-contain hover:transition-all hover:scale-105  border bg-white shadow-md rounded-xl shadow-black p-1" >
                        <img src={flipKart} className="w-[100%] h-[100%] rounded-xl" alt="" />
                    </div>
                    <div className="w-44 h-40 object-contain hover:transition-all hover:scale-105  border shadow-md rounded-xl shadow-black p-1" >
                        <img src={amazon} className="w-[100%] h-[100%] rounded-xl" alt="" />
                    </div>
                    <div className="w-44 h-40 object-contain hover:transition-all hover:scale-105  border shadow-md rounded-xl shadow-black p-1" >
                        <img src={business99} className="w-[100%] h-[100%] rounded-xl" alt="" />
                    </div> */}
                </div>
            </div>

            <p className="ml-8 font-bold text-center xl:text-[28px] md:text-[28px] sm:text-[18px] text-[18px] text-red-900 italic paraTextShadow my-4 capitalize">Online Business B2B Plateform</p>

            <div className='w-full flex justify-center mb-10'>
                <div className='w-[95%] h-fit py-5 flex justify-around flex-wrap gap-6 '>
                <div className="w-52 h-40 object-contain hover:transition-all hover:scale-105  border shadow-md rounded-xl shadow-black p-1" >
                        <img src={udan} className="w-[100%] h-[100%] rounded-xl" alt="" />
                    </div>
                    <div className="w-44 h-40 object-contain hover:transition-all hover:scale-105  border bg-white shadow-md rounded-xl shadow-black p-1" >
                        <img src={flipKart} className="w-[100%] h-[100%] rounded-xl" alt="" />
                    </div>
                    <div className="w-44 h-40 object-contain hover:transition-all hover:scale-105  border shadow-md rounded-xl shadow-black p-1" >
                        <img src={amazon} className="w-[100%] h-[100%] rounded-xl" alt="" />
                    </div>
                    <div className="w-44 h-40 object-contain hover:transition-all hover:scale-105  border shadow-md rounded-xl shadow-black p-1" >
                        <img src={business99} className="w-[100%] h-[100%] rounded-xl" alt="" />
                    </div>
                </div>
            </div>

            <GetEnquiry />
        </>
    )
}

export default Partners
