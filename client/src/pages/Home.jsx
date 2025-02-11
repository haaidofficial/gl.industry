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
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    return (
        <>
            <div className='relative top-[-65x]'>
                <Slider />
                {/* <Products /> */}
                <div className='w-full h-fit my-5'>
                    <div className='w-[95%] py-4 mx-auto'>
                        <h1 className='font-serif my-2 font-mono text-red-900 text-center text-[28px]'>Welcome to G L Industries</h1>
                        <p className='font-serif pt-0 pl-5 tracking-wider text-md/8 text-center text-gray-600'>
                            At G L Industries, we pride ourselves on being a leading name in the manufacturing of high-quality apparel. With years of expertise and a passion for innovation, we deliver products that blend comfort, durability, and style.
                        </p>
                    </div>
                </div>

                <div className='h-fit py-5 flex justify-between items-start px-5 flex-wrap mb-8'>
                    <div className='xl:w-[45%] md:w-[96%] sm:w-[98%] w-[98%]'>
                        <img className='w-full h-[350px] mt-[0px]' src={Fabric} alt="GLBM" />
                    </div>
                    <div className='xl:w-[50%] md:w-[95%] '>
                        {/* <h2 className='text-red-800 text-lg mt-5'>Who We are....</h2>
                          <p className='text-[12px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, ut?</p> */}
                        <p className='text-justify text-md/8 tracking-wider mt-2 font-serif text-gray-600'>
                            G.L Industries came into being in July 2008 with the initial idea seeded by the Proprietor
                            Ms. Sheela Goyal come with an experience of more than 5 years. Their guidance and
                            motivation along with phenomenal support and abundant energy of our staff and
                            workers, G.L Industries is what is today.
                        </p>
                        <p className='text-justify text-md/8 tracking-wider mt-2 font-serif text-gray-600'>
                            Like the begining of most successful business stories, the birth of G.L Industries started with
                            the desire to start a garment that provides garments of high quality grounded on the
                            principle of excellence with transparent business practices and with the social theme of
                            providing employment opportunities for our youth especially women.
                        </p>

                        <div className='mt-10 w-fit bg-red-800 text-white py-2 px-7 cursor-pointer'>
                            <Link to='/aboutUs'>
                                See more
                            </Link></div>
                    </div>
                </div>


                <div className='w-full h-fit'>
                    <div className='w-[95%] py-4 mx-auto'>
                        <div className='bg-gray-200 px-4 py-2 '>
                            <h1 className='font-bold text-red-900 italic text-[20px]'>Our Product Range</h1>
                            <p className='pl-5 text-justify tracking-wider font-serif text-gray-600'>
                                We specialize in manufacturing a diverse collection of garments for all age groups and preferences, ensuring there’s something for everyone.
                            </p>
                        </div>

                        <div>
                            <h1 className='font-bold text-red-900 italic text-[20px] pt-4'> Our Offerings Include:</h1>
                            <ul className='font-serif pt-0 pl-5 font-serif text-gray-600'>
                                <li className='mt-1 tracking-wider'><strong className='text-red-700 text-[16px]'>Jeans:</strong> Classic, trendy, and tailored to perfection in premium denim.</li>
                                <li className='mt-1 tracking-wider'><strong className='text-red-700 text-[16px]'>Trousers:</strong> Formal and casual options that redefine sophistication and comfort.</li>
                                <li className='mt-1 tracking-wider'><strong className='text-red-700 text-[16px]'>T-Shirts:</strong> Versatile designs crafted from the finest knits for everyday wear.</li>
                                <li className='mt-1 tracking-wider'><strong className='text-red-700 text-[16px]'>Bermuda Shorts:</strong> Perfect for casual outings with a blend of style and ease.</li>
                                <li className='mt-1 tracking-wider'><strong className='text-red-700 text-[16px]'>Capris:</strong> Designed for active lifestyles and casual wear.</li>

                            </ul>
                        </div>

                        {/* <div className='bg-gray-200 px-4 py-2 mt-5'>
                            <h1 className='font-bold text-red-900 italic text-[20px]  mt-0'>Categories We Excel In:</h1>
                            <ul className='font-serif pt-0 pl-5'>
                                <li className='mt-1 tracking-wider'><strong className='text-red-700 text-[16px]'>Woven Fabrics: </strong> Crafted with precision for strength and durability.</li>
                                <li className='mt-1 tracking-wider'><strong className='text-red-700 text-[16px]'>Knits: </strong> Soft and flexible materials, perfect for comfortable wear.</li>
                                <li className='mt-1 tracking-wider'><strong className='text-red-700 text-[16px]'>Denim: </strong> High-quality denim that stands the test of time in fashion and utility.</li>

                            </ul>
                        </div> */}

                    </div>
                </div>


              
                {/* <CustomerAutoSlider2 /> */}

                <div className='w-full h-fit mb-5'>
                    <div className='w-[95%] py-4 mx-auto bg-gray-200 px-4'>
                        <h1 className='font-bold text-red-900 italic text-[20px] pt-4'>Partner With Us</h1>
                        <p className='pt-0 pl-5 text-justify tracking-wider font-serif text-gray-600'>
                            Whether you're a retailer looking for reliable bulk manufacturing or a brand seeking custom solutions, G L Industries is your trusted partner. We combine advanced technology, skilled craftsmanship, and efficient production to meet your needs.
                            Contact us today to explore how G L Industries can add value to your business with our superior range of woven, knit, and denim products.
                            <br /> <p className='text-red-900 text-center pt-4 text-[20px]'>
                                <strong > G L Industries — Where Quality Meets Style.</strong></p>
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
