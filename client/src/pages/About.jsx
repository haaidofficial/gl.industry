import React, { useEffect } from 'react'
import About1 from '../assets/imgs/About1.png'
import About2 from '../assets/imgs/About2.png'
import fac1 from '../assets/imgs/facility.png'
import fac2 from '../assets/imgs/facility1.png'
import fac3 from '../assets/imgs/facility2.png'
import Fabric from '../assets/jemin_fabric.png'
import Woven from '../assets/WOVEN-FABRIC.png'
import kint from '../assets/kint.png'

import p1 from '../assets/imgs/p1.png'
import GetEnquiry from '../component/GetEnquiry'

const About = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])


  return (
    <>
      <div className='w-full h-[50vh] backgroundImage mb-10'>
        <div className='w-full h-[100%] flex justify-end items-center flex-col overlayOtherPage '>
          <h1 className='text-[7vmax] font-bold text-white text-justify textShadow mt-2 mb-0 '>About <span className='text-red-900'>Us</span></h1>
        </div>
      </div>
      <div className='h-fit py-5 flex justify-between items-center px-5 flex-wrap mb-8'>
        <div className='xl:w-[45%] md:w-[95%]'>
          <img className='w-full h-[350px] mt-[10px]' src={p1} alt="GLBM" />
        </div>
        <div className='xl:w-[50%] md:w-[95%] '>
          <p className='text-justify mt-2 font-serif'>
            G.L Industries came into being in July 2008 with the initial idea seeded by the Proprietor
            Ms. Sheela Goyal come with an experience of more than 5 years. Their guidance and
            motivation along with phenomenal support and abundant energy of our staff and
            workers, G.L Industries is what is today.
          </p>
          <p className='text-justify mt-2 font-serif'>
            Like the begining of most successful business stories, the birth of G.L Industries started with
            the desire to start a garment that provides garments of high quality grounded on the
            principle of excellence with transparent business practices and with the social theme of
            providing employment opportunities for our youth especially women.
          </p>
          <p className='text-justify mt-2 font-serif'>
            G.L Industries has now flourished to become a name recognized and respected not just
            for the superior quality of its products, but also for its strong customer centric focus
            in all its business dealings.
          </p>
          <p className='text-justify mt-2 font-serif'>
            It has today grown into a global sourcing organization in the area of apparels specializing
            in manufacturing of denims and casuals trousers for boys and men. We make apparels
            from a 6 month old baby to an adult.
          </p>
        </div>
      </div>

      <div className='w-full h-fit my-5 flex justify-center items-center'>
        <div className='xl:w-[100%] md:w-[100%] bg-gray-200 h-fit px-2 py-2 flex justify-center items-center'>
          <h1 className='px-20 w-full xl:text-xl md:text-lg mt-0 text-white text-center py-8 bg-red-800 mx-auto'>One of the India's fastest growing apparel manufacturer with 05
            factories based in DELHI and UP.
          </h1>
        </div>
      </div>

      <div className='w-full h-[70vh] flex justify-center items-center'>
        <img className='xl:w-[80%] md:w-[95%] h-[100%]' src={About2} alt="" />
      </div>



      <div className='w-full flex justify-center items-center'>
      <div className='w-[97%] bg-gray-200 px-4 py-2'>
        <h1 className='font-bold text-red-900 italic text-[20px]  mt-0'>Categories We Excel In:</h1>
        <ul className='font-serif pt-0 pl-5'>
          <li className='mt-1 tracking-wider'><strong className='text-red-700 text-[16px]'>Woven Fabrics: </strong> Crafted with precision for strength and durability.</li>
          <li className='mt-1 tracking-wider'><strong className='text-red-700 text-[16px]'>Knits: </strong> Soft and flexible materials, perfect for comfortable wear.</li>
          <li className='mt-1 tracking-wider'><strong className='text-red-700 text-[16px]'>Denim: </strong> High-quality denim that stands the test of time in fashion and utility.</li>

        </ul>
      </div>
      </div>

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


      <div className='h-fit py-5 flex bg-gray-200 justify-between xl:px-10 lg:px-10 md:px-5 sm:px-5 px-5 flex-wrap mb-5'>
        <div className='xl:w-[45%] md:w-[95%] order-1'>
          <img className='w-full h-[320px]' src={Fabric} alt="GLBM" />
        </div>
        <div className='xl:w-[50%] md:w-[95%] order-2'>
          <h1 className="text-center text-[2.5rem] text-red-900">G.L Industries</h1>
          <ul className='ml-5'>
            <li className='list-disc '>CUSTOMIZED</li>
            <li className='list-disc'>SAMPLING</li>
            <li className='list-disc'>BENCHMARKING</li>
          </ul>
          <h2 className="text-left mt-5 text-[1.5rem] text-red-900">OverView</h2>
          <ul className='ml-5'>
            <li className='list-disc'>Total Garments 36 Lacs Per Annum</li>
            <li className='list-disc'>Implemented scientific way of enhancing our productivity at
              par with international standards</li>
          </ul>
        </div>
      </div>

      <GetEnquiry />
    </>
  )
}

export default About
