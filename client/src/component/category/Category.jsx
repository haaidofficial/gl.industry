import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Category = () => {
    const [categories, setCategories] = useState([]);
    // const [subCategories, setSubCategories] = useState([]);
    // const [activeCategory, setActiveCategory] = useState(null); // State for tracking clicked category

    const navigate = useNavigate();


    useEffect(() => {
        const getCategory = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/categories`);
            setCategories(response.data);
        };
        getCategory();
    }, []);

    // const handleSubCategories = async (parentCategoryId) => {
    //     const response = await axios.get(`http://localhost:8080/api/subcategories/${parentCategoryId}`);
    //     setSubCategories(response.data);
    //     setActiveCategory(parentCategoryId); // Set the active category on click     
    // };

    // const handleProductCategory = (productId) => {
    //     alert(productId); // Only triggers when a subcategory is clicked
    // };
    const openProductPage = () => {
        navigate('/products')
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    return (
        <div className='w-full mt-16 mb-10 bg-white'>
            <p className="ml-8 font-bold text-[18px] text-red-900 italic paraTextShadow mt-8 mb-5 capitalize">Our Categories</p>

            {/* Categories List */}
            <div className='w-full flex justify-center'>
                <div className='xl:flex sm:block block items-start justify-around xl:w-[80%] md:[80%] sm:w-[100%] w-[100%] flex-wrap'>
                    {categories && categories.map((item) => (
                        <div
                            key={item._id}
                            onClick={() => openProductPage()}
                            className={`xl:text-xl sm:text-sm text-sm uppercase tracking-widest border border-gray-400 cursor-pointer xl:w-40 md:w-32 sm:w-[80%] w-[80%] xl:h-40 md:h-32 sm:h-12 h-12 flex justify-center items-center py-2 my-1 sm:mx-auto mx-auto shadow hover:shadow-lg hover:bg-red-900 hover:text-white hover:shadow-black hover:border-none transition-all hover:text-[22px]`
                            }
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
                
            </div>

            {/* Subcategories List */}
            {/* <div className={subCategories.length > 0 ? 'w-full flex justify-center mt-5 transition-all' : 'hidden transition-all'}>
                <div className='flex items-start flex-wrap xl:w-[80%] md:w-[95%] gap-4'>
                    {subCategories.map((item) => (
                        <div
                            key={item._id}
                            className='cursor-pointer border uppercase tracking-widest border-gray-400 w-28 text-center py-2 text-[16px]'
                            onClick={() => handleProductCategory(item._id)}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default Category;
