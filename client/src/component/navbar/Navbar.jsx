import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const location = useLocation();

  const handleMenu = () => {
    !openMenu ? setOpenMenu(true) : setOpenMenu(false)
  }


  // Define admin routes where you don't want to show the client navbar
  const adminRoutes = ['/setting', '/signup', '/slider-handle', '/dashboard', "/categories", '/subcategories', '/productsManagement', '/customerEnquery', '/createProduct', '/productDetails/:id', '/editProduct/:id'];
  // Check if the current route is an admin route
  const isAdminRoute = adminRoutes.includes(location.pathname);

  // If it's an admin route, don't render the navbar
  if (isAdminRoute) return null;

  return (
    <div className='w-full h-16 lg:absolute bg-white xl:sticky md:sticky sm:sticky sticky md:top-0 sm:top-0 top-0 text-black transition-all md:bg-white sm:bg-white  z-10 shadow-xl shadow-black-100'>
      <div className='w-full h-[100%] flex justify-between items-center px-5'>
        <div className='text-[1.8rem] font-thin  px-2 font-sans'>
          <NavLink className="flex items-center h-full" to='/'>
            <img className='w-16 ' src={logo} alt="" /><div className='pl-2 py-[11px] text-red-900 pr-2 uppercase font-extrabold'>G.L Industries</div>
          </NavLink> </div>

        <ul className='uppercase xl:flex lg:flex md:hidden sm:hidden hidden gap-10 mr-14'>
          <li>
            <NavLink className='text-[18px] px-2 py-1 hover:border-b-2 hover:border-b-red-900  text-red-900 transition-all' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className='text-[18px] px-2 py-1 hover:border-b-2 hover:border-b-red-900  text-red-900 transition-all' to='/aboutUs'>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className='text-[18px] px-2 py-1 hover:border-b-2 hover:border-b-red-900  text-red-900 transition-all' to='/products'>
              Catalouge
            </NavLink>
          </li>
          {/* <li>
            <NavLink className='text-[18px] px-2 py-1 hover:border-b-2 hover:border-b-red-900  text-red-900 transition-all' to='/services'>
              Service
            </NavLink>
          </li> */}
          <li>
            <NavLink className='text-[18px] px-2 py-1 hover:border-b-2 hover:border-b-red-900  text-red-900 transition-all' to='/contactUs'
            >Contact Us</NavLink></li>
        </ul>
        <div className='xl:hidden md:block sm:block' onClick={handleMenu} ><FaBars className='text-black text-[2.2rem]' /></div>

      </div>
      <ul className={openMenu ? 'h-[100vh] xl:w-[60%] md:w-[80%] sm:w-[100%] w-[100%] bg-[rgba(255,255,255,0.9)] py-5 ml-0 transition-all xl:hidden lg:hidden md:block sm:block block' : 'transition-all h-[80vh] w-[60%] bg-[rgba(255,255,255,0.8)] py-5 ml-[-70%]'}>
        <li className='text-center mt-5' onClick={() => setOpenMenu(false)}>
          <NavLink className='text-[22px] px-2 py-1 hover:border-b-2 font-bold hover:border-b-red-900  text-red-900 transition-all' to='/' >
            Home
          </NavLink>
        </li>
        <li className='text-center mt-5' onClick={() => setOpenMenu(false)}>
          <NavLink className='text-[22px] px-2 py-1 hover:border-b-2 font-bold hover:border-b-red-900  text-red-900 transition-all' to='/aboutUs'>
            About
          </NavLink>
        </li>
        <li className='text-center mt-5' onClick={() => setOpenMenu(false)}>
          <NavLink className='text-[22px] px-2 py-1 hover:border-b-2 font-bold hover:border-b-red-900  text-red-900 transition-all' to='/products'>
            product
          </NavLink>
        </li>
        <li className='text-center mt-5' onClick={() => setOpenMenu(false)}>
          <NavLink className='text-[22px] px-2 py-1 hover:border-b-2 font-bold hover:border-b-red-900  text-red-900 transition-all' to='/services'>
            Service
          </NavLink>
        </li>
        <li className='text-center mt-5' onClick={() => setOpenMenu(false)}>
          <NavLink className='text-[22px] px-2 py-1 hover:border-b-2 font-bold hover:border-b-red-900  text-red-900 transition-all' to='/contactUs'>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
