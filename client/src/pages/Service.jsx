import React, { useEffect } from 'react'


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

    
    </>
  )
}

export default Service
