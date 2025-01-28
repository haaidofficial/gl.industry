import React, { useEffect } from 'react'
import fac1 from '../assets/imgs/facility.png'
import fac2 from '../assets/imgs/facility1.png'
import fac3 from '../assets/imgs/facility2.png'
import Fabric from '../assets/jemin_fabric.png'
import Woven from '../assets/WOVEN-FABRIC.png'
import kint from '../assets/kint.png'

const Service = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}, [])


  return (
    <>
      <div className='w-full h-[50vh] backgroundImage mb-20'>
        <div className='w-full h-[100%] flex justify-end items-center flex-col overlayOtherPage '>
          <h1 className='text-[7vmax] font-bold text-white text-justify textShadow mb-0'>What <span className='text-red-900'> we do</span></h1>
        </div>
      </div>

      <div className='w-full h-fit'>
        <div className='w-[95%] py-4 mx-auto'>
          <h1 className='font-bold text-red-900 italic text-[18px]'>Welcome to G L Industries</h1>
          <p className='font-serif pt-0 pl-5 text-justify tracking-wider'>
            At G L Industries, we pride ourselves on being a leading name in the manufacturing of high-quality apparel. With years of expertise and a passion for innovation, we deliver products that blend comfort, durability, and style.
          </p>
          <div className='bg-gray-200 px-4 py-2 mt-5'>
            <h1 className='font-bold text-red-900 italic text-[20px]'>Our Product Range</h1>
            <p className='font-serif pl-5 text-justify tracking-wider'>
              We specialize in manufacturing a diverse collection of garments for all age groups and preferences, ensuring there’s something for everyone.
            </p>
          </div>

          <div>
            <h1 className='font-bold text-red-900 italic text-[20px] pt-4'> Our Offerings Include:</h1>
            <ul className='font-serif pt-0 pl-5'>
              <li className='mt-1 tracking-wider'><strong className='text-red-700 text-[16px]'>Jeans:</strong> Classic, trendy, and tailored to perfection in premium denim.</li>
              <li className='mt-1 tracking-wider'><strong className='text-red-700 text-[16px]'>Trousers:</strong> Formal and casual options that redefine sophistication and comfort.</li>
              <li className='mt-1 tracking-wider'><strong className='text-red-700 text-[16px]'>T-Shirts:</strong> Versatile designs crafted from the finest knits for everyday wear.</li>
              <li className='mt-1 tracking-wider'><strong className='text-red-700 text-[16px]'>Pyjamas:</strong> Soft, breathable, and ideal for relaxed moments.</li>
              <li className='mt-1 tracking-wider'><strong className='text-red-700 text-[16px]'>Bermuda Shorts:</strong> Perfect for casual outings with a blend of style and ease.</li>
              <li className='mt-1 tracking-wider'><strong className='text-red-700 text-[16px]'>Capris:</strong> Designed for active lifestyles and casual wear.</li>
              <li className='mt-1 tracking-wider'><strong className='text-red-700 text-[16px]'>Jermicans:</strong> Unique and tailored for niche requirements.</li>
            </ul>
          </div>

          <div className='bg-gray-200 px-4 py-2 mt-5'>
            <h1 className='font-bold text-red-900 italic text-[20px]  mt-0'>Categories We Excel In:</h1>
            <ul className='font-serif pt-0 pl-5'>
              <li className='mt-1 tracking-wider'><strong className='text-red-700 text-[16px]'>Woven Fabrics: </strong> Crafted with precision for strength and durability.</li>
              <li className='mt-1 tracking-wider'><strong className='text-red-700 text-[16px]'>Knits: </strong> Soft and flexible materials, perfect for comfortable wear.</li>
              <li className='mt-1 tracking-wider'><strong className='text-red-700 text-[16px]'>Denim: </strong> High-quality denim that stands the test of time in fashion and utility.</li>

            </ul>
          </div>

        </div>
      </div>



      {/* <p className="ml-16 mt-20 mb-2 font-bold text-[18px] text-red-900 italic paraTextShadow capitalize">Meterial(Fabric) We Use </p> */}

      <div className='h-fit py-5 flex justify-between items-center px-5 flex-wrap mb-5'>
        <div className='xl:w-[45%] md:w-[100%] sm:w-[100%] w-[100%]'>
          <img className='w-[100%] h-[320px] mt-[-10px]' src={Woven} alt="GLBM" />
        </div>
        <div className='xl:w-[50%] md:w-[95%] '>
          <p className='text-justify mt-2 font-serif'>
            Woven fabric is any textile formed by weaving. Woven fabrics
            are often created on a loom, and made of many threads woven
            on a warp and a weft. Technically, a woven fabric is any fabric
            made by interlacing two or more threads at right angles to one
            another.
          </p>
        </div>
      </div>

      <div className='h-fit py-5 flex justify-between items-center px-5 flex-wrap mb-5'>
        <div className='xl:w-[45%] md:w-[100%] sm:w-[100%] w-[100%] xl:order-2 sm:order-1'>
          <img className='w-[100%] h-[320px] mt-[-10px]' src={kint} alt="GLBM" />
        </div>
        <div className='xl:w-[50%] md:w-[95%] xl:order-1 sm:order-2 '>
          <p className='text-justify mt-2 font-serif'>
            Knit fabric is made from one continuous fiber, like yarn or thread, which is repeatedly
            looped to form a garment. If you look closely at a piece of knit clothing, you'll see a pattern that
            looks like rows of fine braids throughout the material.
          </p>
        </div>
      </div>

      <div className='h-fit py-5 flex justify-between items-center px-5 flex-wrap mb-5'>
        <div className='xl:w-[45%] md:w-[100%] sm:w-[100%] w-[100%]'>
          <img className='w-[100%] h-[320px] mt-[-10px]' src={Fabric} alt="GLBM" />
        </div>
        <div className='xl:w-[50%] md:w-[95%] '>
          <p className='text-justify mt-2 font-serif'>
            Denim. Denim is a durable, rugged cotton twill
            fabric that's most commonly used in jeans, jackets and
            overalls, as well as in other types of clothing.
            Denim is available in a range of colors, but the most
            common denim is INDIGO denim in which the
            WARP thread is dyed while the WEFT thread is left
            white.  </p>
          <p className='text-justify mt-2 font-serif'>  As a result of the warp-faced twill weaving, one
            side of the textile is dominated by the blue warp
            threads and the other side is dominated by the white
            weft threads. JEANS fabricated from this cloth are thus
            predominantly white on the inside.
          </p>
        </div>
      </div>

      <div className='w-full h-fit'>
        <div className='w-[95%] py-4 mx-auto bg-gray-200 px-4'>
          <h1 className='font-bold text-red-900 italic text-[20px] pt-4'>Why Choose G L Industries?</h1>
          <ul className='font-serif pt-0 pl-5'>
            <li className='mt-1 tracking-wider'> <strong className='text-red-700 text-[16px]'>Unmatched Quality: </strong> Every product undergoes stringent quality checks to ensure excellence.</li>
            <li className='mt-1 tracking-wider'>  <strong className='text-red-700 text-[16px]'>Versatility: </strong> Our wide range ensures you find the perfect fit for every occasion.</li>
            <li className='mt-1 tracking-wider'>  <strong className='text-red-700 text-[16px]'>Innovation & Trendsetting: </strong> We stay ahead of the curve by designing garments that cater to evolving fashion trends.</li>
            <li className='mt-1 tracking-wider'>  <strong className='text-red-700 text-[16px]'>Sustainability: </strong> We are committed to environmentally friendly practices in every step of our manufacturing process.</li>
          </ul>
        </div>
      </div>

      <p className="ml-16 font-bold text-[18px] text-red-900 italic paraTextShadow mt-8 mb-0 capitalize">OUR FACILITY</p>
      <div className='h-fit pb-5 flex justify-center items-center  flex-wrap mb-5 px-5'>
        <div className='xl:w-[45%] md:w-[95%]'>
          <img className='w-full h-[320px] mt-5 mr-5' src={fac1} alt="GLBM" />
        </div>
        <div className='xl:w-[45%] md:w-[95%]'>
          <img className='w-full h-[320px] mt-5 ml-5' src={fac2} alt="GLBM" />
        </div>
      </div>

      <div className='w-full h-[50vh] flex justify-center items-center mb-10 px-2'>
        <img className='xl:w-[80%] md:w-[95%] h-[100%]' src={fac3} alt="" />
      </div>


      <div className='w-full h-fit mb-5'>
        <div className='w-[95%] py-4 mx-auto bg-gray-200 px-4'>
          <h1 className='font-bold text-red-900 italic text-[20px] pt-4'>Partner With Us</h1>
          <p className='font-serif pt-0 pl-5 text-justify tracking-wider'>
            Whether you're a retailer looking for reliable bulk manufacturing or a brand seeking custom solutions, G L Industries is your trusted partner. We combine advanced technology, skilled craftsmanship, and efficient production to meet your needs.
            Contact us today to explore how G L Industries can add value to your business with our superior range of woven, knit, and denim products.
            <br /> <p className='text-red-900 text-center pt-4 text-[20px]'>
              <strong > G L Industries — Where Quality Meets Style.</strong></p>
          </p>
        </div>
      </div>
    </>
  )
}

export default Service
