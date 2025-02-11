import React, { useEffect, useState } from 'react'
import Category from '../category/Category'
import axios from 'axios'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/products`);
            setProducts(response.data);
        }
        getProducts();
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    return (
        <>
            <div className='w-full mt-16 mb-10 bg-white'>
                <Category />
                <p className="ml-8 font-bold text-[18px] text-red-900 italic paraTextShadow mt-8 mb-5 capitalize">Our Products</p>

                <div className='w-full flex justify-center py-3 h-fit'>
                    <div className='xl:w-[95%] flex justify-center flex-wrap '>
                        {products.slice(0, 8).map((item) => (
                            <div key={item._id} className='uppercase text-white xl:w-60 xl:h-60 py-2 sm:w-40 sm:h-40 w-36 min-h-36 max-h-fit text-center my-2 border rounded-2xl flex flex-col justify-center hover:scale-110 hover:transition-all transition-all items-center bg-gray-700 mx-3 shadow-xl'>
                                <img
                                    className='w-[92%] h-[92%] rounded-xl py-[0.5px]'
                                    src={`${process.env.REACT_APP_BASE_URL}/uploads/${item.image}`}
                                    alt={item.name}
                                />
                              <p className='xl:text-[16px] sm:text-[14px] text-[12px] py-[0.5px] px-1 mt-[0.5px]'>{item.name}</p>  
                            </div>
                        ))}
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Products
