import React, { useEffect, useState, useRef } from 'react'
import { FaBars } from "react-icons/fa";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/newLogo.jpeg'
import axios from 'axios';

// import logo from '../../assets/newLogo.jpg'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filterData, setFilterData] = useState('')
  const location = useLocation();
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const dropdownRef = useRef(null);

  const handleMenu = () => {
    !openMenu ? setOpenMenu(true) : setOpenMenu(false)
  }
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setFilterData('')
  };


  useEffect(() => {
    fetchCategory();
    fetchSubCategories();
    handleSubCategory()
    setDropdownOpen(false);

  }, []);

  const fetchCategory = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/categories`);
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  const fetchSubCategories = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/subcategories`);
      setSubCategories(response.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };



  const handleSubCategoryClick = (categoryName, subCategoryName) => {
    navigate(`/products/${categoryName}'s/${subCategoryName}`, { state: { categoryItem: categoryName } });
    setDropdownOpen(false);
    setFilterData('')
    setOpenMenu(false)
  };

   // Close dropdown when clicking outside
   useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
        setFilterData('')
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubCategory = (id) => {

    setFilterData(subCategories.filter((items) => items.parentCategory._id === id))
    setDropdownOpen(false);

  }

  // Define admin routes where you don't want to show the client navbar
  const adminRoutes = ['/setting', '/signup', '/slider-handle', '/dashboard', "/categories", '/subcategories', '/productsManagement', '/customerEnquery', '/createProduct', '/productDetails/:id', '/editProduct/:id'];
  // Check if the current route is an admin route
  const isAdminRoute = adminRoutes.includes(location.pathname);

  // If it's an admin route, don't render the navbar
  if (isAdminRoute) return null;
  
  // console.log("categories", categories)
  // console.log("subCategories", subCategories)
  // console.log('filterData...', filterData)

  const closeMenuBar = () => {
    setOpenMenu(false)
  }

 


  return (
    <div className=' w-full h-16 lg:absolute bg-white xl:sticky md:sticky sm:sticky sticky md:top-0 sm:top-0 top-0 text-black transition-all xl:bg-white md:bg-white sm:bg-white z-10 shadow-xl shadow-black-100'>
      <div className='relative w-full h-[100%] flex justify-between items-center pl-0 pr-0'>
        <div className='xl:text-[1.8rem] lg:text-[1.2rem] md:text-[1.2rem] sm:text-[1.2rem] text-[1.2rem] font-thin px-2 font-sans'>
          <Link className="flex items-center h-full " to='/'>
            <img className='xl:w-60 lg:w-60 md:w-60 sm:w-60 w-60 hover:scale-105 transition-all' src={logo} alt="" />
            {/* <div className='pl-2 py-[11px] text-[rgb(102,102,51)] pr-2 uppercase font-extrabold'>G.L Industries</div> */}
          </Link> </div>

        <ul className={openMenu ? 'md:absolute sm:absolute absolute top-16 w-full min-h-[80vh] max-h-fit uppercase xl:hidden lg:hidden flex-wrap md:flex sm:flex flex-col items-center gap-5 transition-all bg-[rgba(39,140,110,1)] py-10 px-10 flex left-0' : 'uppercase transition-all xl:flex lg:flex md:hidden sm:hidden items-center bg-[#278c6e] py-2 px-4 hidden xl:gap-12 lg:gap-6 mr-0'} >
          <li onClick={closeMenuBar}>
            <NavLink className='text-[18px] px-2 hover:bg-red-300 py-1 text-white transition-all' to='/'>
              Home
            </NavLink>
          </li>
          <li onClick={closeMenuBar}>
            <NavLink className='text-[18px] px-2 hover:bg-red-300 py-1 text-white transition-all' to='/aboutUs'>
              About Us
            </NavLink>
          </li>
          <li className={openMenu ? 'relative w-full transition-all' : ""} ref={dropdownRef}>
            <button onClick={toggleDropdown} className='hover:bg-red-300  text-[18px] px-2 py-1 text-white transition-all uppercase w-full '>Products</button>
            {dropdownOpen && (
              <ul className={openMenu ? 'relative text-center bg-[#377e69] shadow-lg mt-1 py-2 w-full text-white transition-all' : 'absolute transition-all bg-white shadow-lg mt-2 py-2 xl:w-48 lg:w-48 md:w-full sm:w-full full'}>
                {categories.map((category) => (
                  <li key={category._id}
                    className='px-4 py-2 hover:bg-gray-200 hover:text-gray-900'
                  >
                    <ul>
                      <li
                        className='cursor-pointer'
                        onClick={() => {
                          handleSubCategory(category._id)
                        }}>

                        {category.name}

                      </li>

                    </ul>
                  </li>
                ))}
              </ul>
            )} {filterData.length > 0 ? filterData !== '' ? <ul className={openMenu ? 'relative transition-all bg-[#377e69] text-center text-white shadow-lg mt-1] py-2 xl:w-48 lg:w-48 md:w-full sm:w-full full' : 'absolute transition-all bg-white shadow-lg mt-2 py-2 xl:w-48 lg:w-48 md:w-full sm:w-full full'}>
              {filterData.map((subCategory) => (
                <li key={subCategory._id}
                  className='px-4 py-2 hover:bg-gray-200 hover:text-gray-900'
                >
                  <p className='cursor-pointer' onClick={() => handleSubCategoryClick(subCategory.parentCategory.name, subCategory.name)}>{subCategory.name}</p>
                </li>
              ))}
            </ul> : '' : <div className='bg-transparent'></div>}
          </li>


          <li onClick={closeMenuBar}>
            <NavLink className='text-[18px] px-2 hover:bg-red-300 py-1 text-white transition-all' to='/products'>
              Catalouge
            </NavLink>
          </li>

          <li onClick={closeMenuBar}>
            <NavLink className='text-[18px] px-2 hover:bg-red-300 py-1 text-white transition-all' to='/our-partners'>
              Partners
            </NavLink>
          </li>



          <li onClick={closeMenuBar}>
            <NavLink className='text-[18px] px-2 hover:bg-red-300 py-1 text-white transition-all' to='/contactUs'
            >Contact Us</NavLink></li>



        </ul>
        <div className='xl:hidden lg:hidden md:block sm:block block mr-5' onClick={handleMenu} ><FaBars className='text-black text-[2.2rem]' /></div>

      </div>

      {/* mobile menu */}

      {/* <ul className={openMenu ? 'h-[100vh] xl:w-[60%] md:w-[80%] sm:w-[100%] w-[100%] bg-[rgba(255,255,255,0.9)] py-5 ml-0 transition-all xl:hidden lg:hidden md:block sm:block block' : 'transition-all h-[80vh] w-[60%] bg-[rgba(255,255,255,0.8)] py-5 ml-[-70%]'}>
        <li className='text-center mt-5' onClick={closeMenuBar}>
          <NavLink className='text-[22px] px-2 py-1 text-red-900 transition-all' to='/' >
            Home
          </NavLink>
        </li>
        <li className='text-center mt-5' onClick={closeMenuBar}>
          <NavLink className='text-[22px] px-2 py-1 text-red-900 transition-all' to='/aboutUs'>
            About
          </NavLink>
        </li> */}
      {/* <li className='text-center mt-5' onClick={closeMenuBar}>
          <NavLink className='text-[22px] px-2 py-1 text-red-900 transition-all' to='/products'>
            product
          </NavLink>
        </li> */}
      {/* <li className='relative flex items-center justify-center bg-red-200 w-full h-fit'>
            <Link onClick={toggleDropdown} className='text-[22px] w-fit px-2 py-1 text-center text-red-900 transition-all'>Products</Link>
            {dropdownOpen && (
              <ul className='w-full flex justify-center flex-col items-center uppercase text-[22px] px-2 text-red-900 transition-all  absolute top-8 bg-white shadow-lg mt-2 py-2'>
                {categories.map((category) => (
                  <li key={category._id}
                    className='px-4 py-2 hover:bg-gray-200'
                  >
                    <ul>
                      <li
                      className='cursor-pointer'
                        onClick={() => {
                          handleSubCategory(category._id)
                        }}>

                        {category.name}

                      </li>

                    </ul>
                  </li>
                ))}
              </ul>
            )} {filterData.length > 0 ? filterData !== '' ? <ul className='absolute top-9 bg-white shadow-lg mt-2 h-fit py-2 w-48'>
            {filterData.map((subCategory) => (
              <li key={subCategory._id}
                className='px-4 py-2 hover:bg-gray-200'
              >
               <p className='cursor-pointer' onClick={()=>handleSubCategoryClick(subCategory.parentCategory.name,subCategory.name)}>{subCategory.name}</p> 
              </li>
            ))}
          </ul> : '' : <div className='bg-transparent'></div>}
          </li>
        <li className='text-center mt-5' onClick={closeMenuBar}>
          <NavLink className='text-[22px] px-2 py-1 text-red-900 transition-all' to='/products'>
            Catalouge
          </NavLink>
        </li> */}
      {/* <li className='text-center mt-5' onClick={closeMenuBar}>
          <NavLink className='text-[22px] px-2 py-1 text-red-900 transition-all' to='/services'>
            Service
          </NavLink>
        </li> */}
      {/* <li className='text-center mt-5' onClick={closeMenuBar}>
          <NavLink className='text-[22px] px-2 py-1 text-red-900 transition-all' to='/our-partners'>
            Our-Partners
          </NavLink>
        </li>
        <li className='text-center mt-5' onClick={closeMenuBar}>
          <NavLink className='text-[22px] px-2 py-1 text-red-900 transition-all' to='/contactUs'>
            Contact
          </NavLink>
        </li>

      </ul> */}
    </div>
  )
}

export default Navbar
