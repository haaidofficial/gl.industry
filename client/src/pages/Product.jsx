import React, { useEffect } from 'react'
// import FilterCategory from '../component/category/FilterCategory'
import GetEnquiry from '../component/GetEnquiry';
import CatelougePage from '../component/category/CatelougePage';

const Product = () => {

  useEffect(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }, [])
      
  return (
    <> 
        <div className='w-full'>
          {/* this line <FilterCategory /> is for previous product page design  */}
          {/* <FilterCategory />    */}

          {/* Adding new product showcase design  */}

          <CatelougePage />
        </div>
        <GetEnquiry />
    </>
  )
}

export default Product
