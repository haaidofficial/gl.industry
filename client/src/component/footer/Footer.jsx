import React from 'react'
// import logo from '../../asset/sr_industry_logo.png'
import { IoLocationOutline, IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png'
// import { Link } from 'react-router-dom';


const Footer = () => {
  const location = useLocation();
  // Define the admin routes where you want to show the admin navbar
  const adminRoutes = ['/setting', '/slider-handle', '/signup', '/customerEnquery', '/dashboard', "/categories", '/subcategories', '/productsManagement', '/createProduct', '/productDetails', '/editProduct'];

  // Check if the current route is an admin route
  const isAdminRoute = adminRoutes.includes(location.pathname);

  // If it's not an admin route, don't render the admin navbar
  if (isAdminRoute) return null;


  return (
    <>
      <div className='flex justify-around items-start bg-red-800 h-fit py-5 flex-wrap px-4 '>
        <div className='w-[400px] mt-5 '>
          {/* <img src={logo} className='w-80 border-white' alt="logo" /> */}
          <div className=' flex items-center'>
            <img className='w-20' src={logo} alt="" />
            <h1 className='text-[2rem] font-bold text-white text-justify textShadow font-serif px-2'> <span className='font-serif text-white'>G.L Industries</span></h1>
          </div>
          <p className='text-white mt-3 text-justify font-serif'>G.L.B.M came into being in July 2008 with the initial idea seeded by the Proprietor
            Ms. Sheela Goyal come with an experience of more than 5 years. Their guidance and
            motivation along with phenomenal support and abundant energy of our staff and
            workers, G.L.B.M is what is today.</p>
        </div>
        <div className='xl:w-[150px] lg:w-[1500px] md:w-[150px] font-serif sm:w-[400px] w-[400px] mt-10'>
          <h1 className='text-xl font-bold text-white mb-5 '>Links</h1>

          <ul className='text-white gap-3 flex flex-col mx-auto'>
            <li><a className='hover:text-gray-500' href="/">Home</a></li>
            <li><a className='hover:text-gray-500' href='/aboutUs'>About us</a></li>
            {/* <li><a className='hover:text-gray-500' href='/services'>Our Services</a></li> */}
            <li><a className='hover:text-gray-500' href='/products'>Our Products</a></li>
            <li><a className='hover:text-gray-500' href='/contactUs'>Contact Us</a></li>
          </ul>
        </div>

        <div className='xl:w-[150px] lg:w-[1500px] md:w-[150px] font-serif sm:w-[400px] w-[400px] mt-10'>
          <h1 className='text-xl font-bold text-white mb-5 '>Our Products</h1>

          <ul className='text-white gap-3 flex flex-col mx-auto'>
            <li><a className='hover:text-gray-500' href="/products">Jeans for Men</a></li>
            <li><a className='hover:text-gray-500' href='/products'>Jeans for Women</a></li>
            {/* <li><a className='hover:text-gray-500' href='/services'>Our Services</a></li> */}
            <li><a className='hover:text-gray-500' href='/products'>Jeans for Boy</a></li>
            <li><a className='hover:text-gray-500' href='/products'>Jeans for Girl</a></li>
          </ul>
        </div>

        <div className='w-[350px] font-serif mt-10'>
          <h1 className='text-xl font-bold text-white mb-5'>Get In Touch</h1>
          <div>
            <div className='text-white cursor-pointer my-2 flex items-start' ><span className='mr-2 text-lg mt-1'><IoLocationOutline /></span> M/S G.L.B.M, H-4, Sector D-1, Tronica City,<br /> Ghaziabad-210103.</div>
            <div className='text-white cursor-pointer my-2 flex items-center'><span className='mr-2 text-lg'><MdOutlineLocalPhone /></span>
              +91-8383977648</div>
            <div className='text-white cursor-pointer my-2 flex items-center'><span className='mr-2 text-lg'><MdOutlineMailOutline /></span>glrs.smiley@gmail.com</div>
            <div className='flex mt-6'>
              <div className='text-white cursor-pointer ml-0' ><span className='mr-2 text-2xl mt-1'><IoLogoWhatsapp /></span> </div>
              <div className='text-white cursor-pointer ml-5'><span className='mr-2 text-2xl'><IoLogoInstagram /></span></div>
              <div className='text-white cursor-pointer ml-5'><span className='mr-2 text-2xl'><IoLogoFacebook /></span></div>
            </div>
          </div>
        </div>

      </div>
      <div className='w-full h-[1px] font-serif bg-gray-500'></div>
      <div className='bg-red-900 w-full '>
        <p className='text-white text-center py-2'> Copyrights © 2026 || All Rights Reserved |</p>
      </div>
    </>
  )
}

export default Footer




