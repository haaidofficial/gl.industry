import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
// import { IoIosArrowRoundBack } from "react-icons/io";
import GetEnquiry from "../component/GetEnquiry"

const ProductPageDetailed = () => {
  const [products, setProducts] = useState([]);
  // const [img, setImg] = useState('')
  const { name } = useParams()
  const { state } = useLocation();
  const [loading, setLoading] = useState(true);

  // const handleFullPic = (image) => {
  //   setImg(image)
  // }
  useEffect(() => {
    const fetchProducts = async (subCategoryId) => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/products?subcategory=${subCategoryId}`);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    setTimeout(fetchProducts,100)
    

  }, [])

  const filterProduct = products.filter(items => items.category.name === state.categoryItem)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-[2rem] font-semibold text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <>
      {/* <div className='w-fit mt-4 ml-10 text-white cursor-pointer hover:shadow-lg shadow-gray-900 bg-red-800'>
        <Link to='/products' className='px-8 py-2 flex justify-center items-center' >
          <IoIosArrowRoundBack className='text-2xl font-bold' />
          <p>Back</p></Link>
      </div> */}
      <p className='text-center capitalize text-[3vmax] sm:mt-5 mt-5 my-2 font-sans text-red-900'> {state.categoryItem}'s {name} Collections </p>
      <div>
        <div className='w-full min-h-[80vh] max-h-fit  mb-4 flex justify-center'>
          <div className='w-[95%] max-h-fit flex  flex-wrap '>
            {
              filterProduct.length === 0 ? <div className='w-full h-[85vh] flex items-center justify-center text-[2vmax]'> <div className='mt-[-200px] text-gray-400'> Product Not Available.... </div></div> :
                filterProduct.filter(productItem => productItem.subCategory.name === name).length === 0 ? <div className='w-full h-[85vh] flex items-center justify-center text-[2vmax]'> <div className='mt-[-250px] text-gray-600'> Product Not Available in this Category .... </div> </div> : filterProduct.filter(productItem => productItem.subCategory.name === name).map((items) => {
                  return (
                    <div
                      key={items._id}
                      className="cursor-pointer m-2 border xl:w-72 md:w-72 sm:w-[98%] w-[98%] min-h-40 mix-h-fit rounded-lg p-2 shadow-md flex flex-col items-start bg-white"
                    // onClick={() => handleFullPic(`${process.env.REACT_APP_BASE_URL}/uploads/${items.image}`)}
                    >
                      <img
                        className='w-[100%] h-68  rounded-xl'
                        src={`${process.env.REACT_APP_BASE_URL}/uploads/${items.image}`} alt={items.slug}
                      />
                      <h1 className='mx-auto text-[20px] text-center capitalize'>{items.name}</h1>
                    </div>
                  )
                })
            }
          </div>
        </div>
      </div>
      <div>
      </div>
      <GetEnquiry />
    </>

  )
}

export default ProductPageDetailed
