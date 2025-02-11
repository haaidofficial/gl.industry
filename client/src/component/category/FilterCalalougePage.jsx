import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import GetEnquiry from '../GetEnquiry';

const FilterCalalougePage = () => {
    const [products, setProducts] = useState([]);
    const [img, setImg] = useState('')

    const { name } = useParams()
    const { state } = useLocation();

    const handleFullPic = (image) => {
        setImg(image)

    }
    useEffect(() => {
        const fetchProducts = async (subCategoryId) => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/products?subcategory=${subCategoryId}`);
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, [img])

    const filterProduct = products.filter(items => items.category.name === name)

    // console.log(state.subCategoryItem)

  


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    console.log(img)

    return (

        <>
            <div className='w-fit mt-4 ml-10 text-white cursor-pointer hover:shadow-lg shadow-gray-900 bg-red-800'>
                <Link to='/products' className='px-8 py-2 flex justify-center items-center' >
                    <IoIosArrowRoundBack className='text-2xl font-bold' />
                    <p>Back</p></Link>
            </div>
            <p className='text-center capitalize text-[3vmax] sm:mt-5 mt-5 my-2 font-sans text-red-900'> {name} {state.subCategoryItem} Collections </p>
            <div>
                <div className='w-full min-h-[100vh] max-h-fit  mb-4 flex justify-center'>
                    <div className='w-[95%] flex flex-wrap'>
                        {
                            filterProduct.length === 0 ? <div className='w-full h-[85vh] flex items-center justify-center text-[5vmax]'> <div className='mt-[-200px] text-gray-600'> Product Will comming soon.... </div></div> :
                                filterProduct.filter(productItem => productItem.subCategory.name === state.subCategoryItem).length === 0 ? <div className='w-full h-[85vh] flex items-center justify-center text-[5vmax]'> <div className='mt-[-250px] text-gray-600'> Product Will comming soon.... </div> </div> : filterProduct.filter(productItem => productItem.subCategory.name === state.subCategoryItem).map((items) => {
                                    return (
                                        <div
                                            key={items._id}
                                            className='xl:w-64 xl:h-64 md:w-60 md:h-64 sm:w-48 sm:h-64 w-[100%] h-64 border-[0.5px] my-2 mx-5'
                                            onClick={() => handleFullPic(`${process.env.REACT_APP_BASE_URL}/uploads/${items.image}`)}
                                        >
                                            <img
                                                src={`${process.env.REACT_APP_BASE_URL}/uploads/${items.image}`}
                                                alt={items.name}
                                                className="w-full h-56 p-2 object-cover"
                                            />
                                            <h1 className='text-center text-[20px] capitalize'>{items.name}</h1>
                                        </div>
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
            <GetEnquiry />


           
        </>
    )
}

export default FilterCalalougePage
