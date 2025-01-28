import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nyssa from '../../assets/clientsImages/nyssa.png'
import Vishal from '../../assets/clientsImages/Vishal-MegaMart.png'
import ss from '../../assets/clientsImages/shoppers-stop.png'
import vmart from '../../assets/clientsImages/v-mart.jfif'
import citycart from '../../assets/clientsImages/citycart.webp'
import cantabil from '../../assets/clientsImages/CANTABIL.NS_BIG-6d1e382a.png'
import relaince from '../../assets/clientsImages/reliance-retail-logo.png'
import v2 from '../../assets/clientsImages/v2.jpg'
import cobb from '../../assets/clientsImages/cobb.png'
import udan from '../../assets/clientsImages/udan.png'
import flipKart from '../../assets/clientsImages/flipkart.webp'
import amazon from '../../assets/clientsImages/amazon.png'
import business99 from '../../assets/clientsImages/99business.png'

const CustomerAutoSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="w-full my-10 ">
                <p className="ml-8 font-bold text-[18px] text-red-900 italic paraTextShadow">Our Esteemed Customers</p>
                <div className="flex justify-center w-full mt-5">
                    <div className="xl:w-[95%] lg:w-[95%] md:[95%] sm:w-[90%] w-[89%]">
                        <Slider {...settings}>
                            <div className="w-36 h-28 object-contain px-4" >
                                <img src={Vishal} className="w-[100%] h-[100%]" alt="" />
                            </div>
                            <div className="w-36 h-28 object-contain px-4" >
                                <img src={relaince} className="w-[100%] h-[100%]" alt="" />
                            </div>
                            <div className="w-36 h-28 object-contain px-4" >
                                <img src={vmart} className="w-[100%] h-[100%]" alt="" />
                            </div>
                            <div className="w-36 h-28 object-contain px-4" >
                                <img src={ss} className="w-[100%] h-[100%]" alt="" />
                            </div>
                            <div className="w-36 h-28 object-contain px-4" >
                                <img src={citycart} className="w-[100%] h-[100%]" alt="" />
                            </div>
                            <div className="w-36 h-28 object-contain px-4" >
                                <img src={cantabil} className="w-[100%] h-[100%]" alt="" />
                            </div>

                            <div className="w-36 h-28 object-contain px-4" >
                                <img src={v2} className="w-[100%] h-[100%]" alt="" />
                            </div>
                            <div className="w-36 h-28 object-contain px-4" >
                                <img src={cobb} className="w-[100%] h-[100%]" alt="" />
                            </div>
                            <div className="w-36 h-28 object-contain px-4" >
                                <img src={nyssa} className="w-[100%] h-[100%]" alt="" />
                            </div>
                            <div className="w-36 h-28 object-contain px-4" >
                                <img src={udan} className="w-[100%] h-[100%]" alt="" />
                            </div>
                            <div className="w-36 h-28 object-contain px-4" >
                                <img src={flipKart} className="w-[100%] h-[100%]" alt="" />
                            </div>
                            <div className="w-36 h-28 object-contain px-4" >
                                <img src={amazon} className="w-[100%] h-[100%]" alt="" />
                            </div>
                            <div className="w-36 h-28 object-contain px-4" >
                                <img src={business99} className="w-[100%] h-[100%]" alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CustomerAutoSlider
