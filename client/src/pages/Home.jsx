import React, { useEffect } from 'react'
import CustomerAutoSlider from '../component/customers/CustomerAutoSlider'
// import CustomerAutoSlider2 from '../component/customers/CustomerAutoSlider2'
// import About1 from '../assets/imgs/About1.png'
// import Products from '../component/products/Products'
import Slider from '../component/hero/Slider'
import Fabric from '../assets/jemin_fabric.png'
import { Link } from 'react-router-dom'
import GetEnquiry from '../component/GetEnquiry'

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <div className='relative top-[-65x]'>
        <Slider />
        {/* <Products /> */}
        <div className='w-full h-fit my-5'>
          <div className='w-[95%] py-4 mx-auto'>
            <h1 className='font-serif my-2 text-red-900 text-center text-[28px]'>
              Welcome to G L Industries
            </h1>
            <p className='font-serif pt-0 pl-5 tracking-wider text-md/8 text-center text-gray-600'>
              At G L Industries, we pride ourselves on being a leading name in
              the manufacturing of high-quality apparel. With years of expertise
              and a passion for innovation, we deliver products that blend
              comfort, durability, and style.
            </p>
          </div>
        </div>

        <div className='h-fit py-5 flex justify-between items-start px-5 flex-wrap mb-8'>
          <div className='xl:w-[45%] md:w-[96%] sm:w-[98%] w-[98%]'>
            <img
              className='w-full h-[350px] mt-[0px]'
              src={Fabric}
              alt='GLBM'
            />
          </div>
          <div className='xl:w-[50%] md:w-[95%] '>
            {/* <h2 className='text-red-800 text-lg mt-5'>Who We are....</h2>
                          <p className='text-[12px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, ut?</p> */}

            <h1 className='font-bold text-justify font-serif text-red-900 text-[20px] pt-4'>
              Your Trusted Denim Manufacturer & Supplier
            </h1>
            <p className='font-bold text-justify font-serif text-gray-600 text-[16px] text-bold mb-1'>
              {' '}
              Premium Quality Denim Jeans for Wholesale & Bulk Orders
            </p>
            <p className='text-justify text-md/8 tracking-wider mt-2 font-serif text-gray-600'>
              Looking for a reliable denim manufacturer to supply top-tier jeans
              and denim products? You've come to the right place! At GL
              Industries, we specialize in producing high-quality denim apparel
              that blends superior craftsmanship with the latest fashion trends.
              Whether you're a wholesaler, retailer, fashion brand, or private
              label, we provide premium denim solutions tailored to your
              business needs.
            </p>
            <p className='text-justify text-md/8 tracking-wider mt-2 font-serif text-gray-600'>
            <p className='font-bold text-justify font-serif text-gray-600 text-[16px] text-bold mb-1'>
              {' '}
              Take Your Denim Business to the Next Level 
            </p>
              
              Join hands with us to
              bring high-quality denim apparel to your customers. With our
              expertise, competitive pricing, and unwavering commitment to
              excellence, we help you turn opportunities into success. Let’s
              create something extraordinary together!
            </p>

            <div className='mt-10 w-fit bg-red-800 text-white py-2 px-7 cursor-pointer'>
              <Link to='/aboutUs'>See more</Link>
            </div>
          </div>
        </div>

        <div className='w-full h-fit'>
          <div className='w-[95%] py-4 mx-auto'>
            <div className='bg-gray-200 px-4 py-2 '>
              <h1 className='font-bold text-red-900 italic text-[20px]'>
                Our Product Range
              </h1>
              <p className='pl-5 text-justify tracking-wider font-serif text-gray-600'>
                We specialize in manufacturing a diverse collection of garments
                for all age groups and preferences, ensuring there’s something
                for everyone.
              </p>
            </div>

            <div>
              <h1 className='font-bold text-red-900 italic text-[20px] pt-4'>
                {' '}
                Our Offerings Include:
              </h1>
              <ul className='font-serif pt-0 pl-5 text-gray-600'>
                <li className='mt-1 tracking-wider'>
                  <strong className='text-red-700 text-[16px]'>Jeans:</strong>{' '}
                  Classic, trendy, and tailored to perfection in premium denim.
                </li>
                <li className='mt-1 tracking-wider'>
                  <strong className='text-red-700 text-[16px]'>
                    Trousers:
                  </strong>{' '}
                  Formal and casual options that redefine sophistication and
                  comfort.
                </li>
                <li className='mt-1 tracking-wider'>
                  <strong className='text-red-700 text-[16px]'>
                    T-Shirts:
                  </strong>{' '}
                  Versatile designs crafted from the finest knits for everyday
                  wear.
                </li>
                <li className='mt-1 tracking-wider'>
                  <strong className='text-red-700 text-[16px]'>
                    Bermuda Shorts:
                  </strong>{' '}
                  Perfect for casual outings with a blend of style and ease.
                </li>
                <li className='mt-1 tracking-wider'>
                  <strong className='text-red-700 text-[16px]'>Capris:</strong>{' '}
                  Designed for active lifestyles and casual wear.
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* <CustomerAutoSlider2 /> */}

        <div className='w-full h-fit mb-5'>
          <div className='w-[95%] py-4 mx-auto bg-gray-200 px-4'>
            <h1 className='font-bold text-red-900 italic text-[20px] pt-4'>
              Why Partner with Us?
            </h1>
            <p className='pt-0 pl-5 text-justify tracking-wider font-serif text-gray-600'>
              In the fast-evolving fashion industry, having a dependable
              manufacturing partner is crucial. We don’t just produce denim; we
              empower businesses with a seamless supply chain, ensuring
              consistency, affordability, and trend-driven designs. Whether
              you're an emerging retailer or an established distributor, we
              tailor our services to match your exact needs.
              <br />{' '}
              <p className='text-red-900 text-center pt-4 text-[20px]'>
                <strong> G L Industries — Where Quality Meets Style.</strong>
              </p>
            </p>
          </div>
        </div>

        
      </div>
      <CustomerAutoSlider />
      <GetEnquiry />
    </>
  )
}

export default Home
