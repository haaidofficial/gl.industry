import React from 'react'
// import logo from '../../asset/sr_industry_logo.png'
import { IoLocationOutline, IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp, IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import logo from '../../assets/footerLogo.jpeg'
// import logo from '../../assets/gl-logo1.jpg'
// import logoText from '../../assets/gl-logo-text.png'
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
      <div className='flex justify-start xl:gap-10 lg:gap-10 md:gap-6 sm:gap-0 gap-0 items-start bg-gray-100  h-fit py-5 flex-wrap px-4 '>
        <div className='w-[400px] mt-5 '>
          {/* <img src={logo} className='w-80 border-gray-800' alt="logo" /> */}
          <div className=' flex items-center'>
            <img className='w-80 ml-2 object-contain' src={logo} alt="logo" />
            {/* <img className='w-52 ml-2' src={logoText} alt="logo-text" /> */}
            {/* <h1 className='text-[2rem] font-bold text-justify px-2'> <span className='font-serif text-[rgb(102,102,51)]'>G.L Industries</span></h1> */}
          </div>
          <p className='text-gray-800 mt-3 text-justify font-serif'>G.L Industries came into being in July 2008 with the initial idea seeded by the Proprietor
            Ms. Sheela Goyal come with an experience of more than 5 years. Their guidance and
            motivation along with phenomenal support and abundant energy of our staff and
            workers.</p>
        </div>
        <div className='xl:w-[150px] lg:w-[150px] md:w-[150px] font-serif sm:w-[400px] xl:mx-10 lg:mx-10 sm:mx-0 mx-0 w-[400px] mt-10'>
          <h1 className='text-xl font-bold text-gray-900 mb-5 '>Links</h1>

          <ul className='text-gray-800 gap-3 flex flex-col mx-auto'>
            <li><a className='hover:text-red-900' href="/">Home</a></li>
            <li><a className='hover:text-red-900' href='/aboutUs'>About us</a></li>
            {/* <li><a className='hover:text-red-900' href='/services'>Our Services</a></li> */}
            <li><a className='hover:text-red-900' href='/our-partners'>Our-Partners</a></li>
            <li><a className='hover:text-red-900' href='/products'>Our Products</a></li>
            <li><a className='hover:text-red-900' href='/contactUs'>Contact Us</a></li>
          </ul>
        </div>

        <div className='xl:w-[150px] lg:w-[150px] md:w-[150px] font-serif sm:w-[400px] w-[400px] mt-10'>
          <h1 className='text-xl font-bold text-gray-900 mb-5 '>Our Products</h1>

          <ul className='text-gray-800 gap-3 flex flex-col mx-auto'>
            <li><a className='hover:text-red-900' href="/products">Jeans for Men</a></li>
            <li><a className='hover:text-red-900' href='/products'>Jeans for Women</a></li>
            {/* <li><a className='hover:text-red-900' href='/services'>Our Services</a></li> */}
            <li><a className='hover:text-red-900' href='/products'>Jeans for Boy</a></li>
            <li><a className='hover:text-red-900' href='/products'>Jeans for Girl</a></li>
          </ul>
        </div>

        <div className='w-[350px] font-serif mt-10'>
          <h1 className='text-xl font-bold text-gray-900 mb-5'>Get In Touch</h1>
          <div>
            <div className='text-gray-800 cursor-pointer my-2 flex items-start' ><span className='mr-2 text-lg mt-1'><IoLocationOutline /></span> G.L Industries, H-4, Sector D-1, Tronica City,<br /> Ghaziabad-210103.</div>
            <div className='text-gray-800 cursor-pointer my-2 flex items-center'><span className='mr-2 text-lg'><MdOutlineLocalPhone /></span>
              +91-8383977648</div>
            <div className='text-gray-800 cursor-pointer my-2 flex items-center'>
              <span className='mr-2 text-lg'>
                <MdOutlineMailOutline />
              </span>glrs.smiley@gmail.com</div>
            <div className='flex mt-6'>
              <div className='text-gray-800 hover:text-green-800 cursor-pointer ml-0'>
                <span className='mr-2 xl:text-[2.5rem] md:text-[2.5rem] sm:text-[2rem] text-[2rem] mt-1'>
                  <a
                    href="https://wa.me/8383977648"
                    className="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp />
                  </a>
                </span>
              </div>
              <div className='text-gray-800 hover:text-pink-500 cursor-pointer ml-5'>
                <span className='mr-2 xl:text-[2.5rem] md:text-[2.5rem] sm:text-[2rem] text-[2rem]'>
                <a href="https://www.instagram.com/gl.industries/?hl=en"><IoLogoInstagram /></a>
                </span>
              </div>
              <div className='text-gray-800 hover:text-blue-600 cursor-pointer ml-5'>
                <span className='mr-2 xl:text-[2.5rem] md:text-[2.5rem] sm:text-[2rem] text-[2rem]'>
                  <IoLogoFacebook />
                </span>
              </div>
              <div className='text-gray-800 hover:text-blue-600 cursor-pointer ml-5'>
                <span className='mr-2 xl:text-[2.5rem] md:text-[2.5rem] sm:text-[2rem] text-[2rem]'>
                <a href="https://linkedin.com/in/g-l-industries-9624a031b"><IoLogoLinkedin /> </a>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='w-full h-[1px] font-serif bg-gray-100'></div>
      <div className='bg-red-400 w-full '>
        <p className='text-white text-center py-2'> Copyrights © 2026 || All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer




