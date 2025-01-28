import React, { useEffect } from 'react'
import FilterCategory from '../component/category/FilterCategory'

const Product = () => {

  useEffect(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }, [])
      
  return (
    <> 
        <div className='w-full'>
        <FilterCategory />  
        </div>
    </>
  )
}

export default Product
