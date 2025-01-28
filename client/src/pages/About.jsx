import React, { useEffect } from 'react'
import About1 from '../assets/imgs/About1.png'
import About2 from '../assets/imgs/About2.png'

import p1 from '../assets/imgs/p1.png'

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
          <img className='w-full h-[320px] mt-[-10px]' src={About1} alt="GLBM" />
        </div>
        <div className='xl:w-[50%] md:w-[95%] '>
          {/* <h2 className='text-red-800 text-lg mt-5'>Who We are....</h2>
          <p className='text-[12px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, ut?</p> */}
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

      {/* <div className='h-fit py-5 flex justify-between items-center px-5 flex-wrap mb-5'>
        <div className='xl:w-[45%] md:w-[95%] order-2'>
          <img className='w-full h-[320px] mt-5' src={About1} alt="GLBM" />
        </div>
        <div className='xl:w-[50%] md:w-[95%] order-1'> */}
          {/* <h2 className='text-red-800 text-lg mt-5'>Who We are....</h2>
          <p className='text-[12px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, ut?</p> */}
          {/* <p className='text-justify mt-2'>
            G.L Industries came into being in July 2008 with the initial idea seeded by the Proprietor
            Ms. Sheela Goyal come with an experience of more than 5 years. Their guidance and
            motivation along with phenomenal support and abundant energy of our staff and
            workers, G.L Industries is what is today.
          </p>
          <p className='text-justify mt-2'>
            Like the begining of most successful business stories, the birth of G.L Industries started with
            the desire to start a garment that provides garments of high quality grounded on the
            principle of excellence with transparent business practices and with the social theme of
            providing employment opportunities for our youth especially women.
          </p>
          <p className='text-justify mt-2'>
            G.L Industries has now flourished to become a name recognized and respected not just
            for the superior quality of its products, but also for its strong customer centric focus
            in all its business dealings.
          </p>
          <p className='text-justify mt-2'>
            It has today grown into a global sourcing organization in the area of apparels specializing
            in manufacturing of denims and casuals trousers for boys and men. We make apparels
            from a 6 month old baby to an adult.
          </p>
        </div>
      </div> */}
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


      <div className='h-fit py-5 flex bg-gray-200 justify-between xl:px-10 lg:px-10 md:px-5 sm:px-5 px-5 flex-wrap mb-5'>
        <div className='xl:w-[45%] md:w-[95%] order-1'>
          <img className='w-full h-[320px]' src={p1} alt="GLBM" />
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


    </>
  )
}

export default About
