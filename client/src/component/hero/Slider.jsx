import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import './Slider.css';  // Import custom CSS

const Slider = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/slides`);
        setSlides(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch slides. Please try again later.");
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <Swiper
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      effect="fade"
      navigation
      pagination={{ clickable: true }}
      loop
      spaceBetween={50}
      slidesPerView={1}
      className="w-full xl:h-[80vh] md:h-[40vh] sm:h-[40vh] h-[40vh] mx-auto text-center slider-container"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide._id} className="relative flex items-center justify-center">
          <img src={slide.imageUrl} alt={slide.title || "Slide Image"} className="w-[100%] h-[100%] object-initial bg-black" />
          {/* <div className="absolute text-center text-black px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 font-sans">{slide.tagline}</h2>
            <p className="text-lg md:text-xl opacity-90">{slide.subtitle}</p>
          </div> */}
          {(slide.title || slide.description) && (
            <div className="absolute inset-0 bg-black bg-opacity-75 text-white flex flex-col justify-center font-mono items-center p-4">
              {slide.title && (
                <h2 className="text-4xl/6 font-mono mb-2 w-[80%] tracking-tight">{slide.title}</h2>
              )}
              {slide.description && (
                <p className="text-md text-center mt-[10px] italic">{slide.description}</p>
              )}
            </div>
          )}
        </SwiperSlide>
      ))}

    </Swiper>
  );
};

export default Slider;
