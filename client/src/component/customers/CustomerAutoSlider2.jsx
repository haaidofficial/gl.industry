import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import udan from '../../assets/clientsImages/udan.png'
import flipKart from '../../assets/clientsImages/flipkart.webp'
import amazon from '../../assets/clientsImages/amazon.png'
import business99 from '../../assets/clientsImages/99business.png'

const CustomerAutoSlider2 = () => {

    return (
        <>
            <div className="w-full my-10 ">
                <p className="ml-8 font-bold text-[18px] text-red-900 italic paraTextShadow mt-8 capitalize">Online Business B2B Plateform</p>
                <div className="flex justify-center w-full mt-5">
                    <div className="xl:w-[80%] lg:w-[80%] md:[80%] sm:w-[75%] w-[80%] flex flex-wrap ">
                        <div className="xl:w-[50%] sm:w-[100%] flex justify-around items-center">
                            <div className="max-w-52 h-24 object-contain px-2" >
                                <img src={udan} className="w-[100%] h-[100%]" alt="" />
                            </div>
                            <div className="max-w-52 h-36 object-contain px-2" >
                                <img src={flipKart} className="w-[100%] h-[100%]" alt="" />
                            </div>
                        </div>
                        <div className="xl:w-[50%] sm:w-[100%] flex mt-5 justify-around items-center">
                            <div className="max-w-52 h-28 object-contain px-2" >
                                <img src={amazon} className="w-[100%] h-[100%]" alt="" />
                            </div>
                            <div className="max-w-52 h-28 object-contain px-2" >
                                <img src={business99} className="w-[100%] h-[100%]" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CustomerAutoSlider2
