import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CatelougePage = () => {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const navigate = useNavigate(); // Initialize navigation

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/categories`);
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchSubCategories = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/subcategories`);
                setSubCategories(response.data);
            } catch (error) {
                console.error("Error fetching subcategories:", error);
            }
        };
        fetchSubCategories();
    }, []);

    const handleSubCategoryClick = (name, subcategoryName) => {
        navigate(`/products/${name}`, { state: { subCategoryItem: subcategoryName } })
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])


    return (
        <>
            <div className='min-h-[85vh] max-h-fit'>
                <div className='w-full mb-10'>
                    {categories.map((category) => (
                        <div key={category._id} className='text-center text-black '>
                            <h1 className='uppercase xl:text-[3.5rem] md:text-[3rem] sm:text-[2.5rem] text-[2.5rem] text-red-900 mt-20'>
                                <span>-----</span> {category.name} <span>-----</span>
                            </h1>
                            <div className='w-full  flex justify-center'>
                                <div className='w-[95%] h-90 flex flex-wrap xl:justify-start md:justify-center sm:justify-center justify-center gap-6 mt-4'>
                                    {

                                        subCategories.filter(item => item.parentCategory._id === category._id).map(subCat => (
                                            <div
                                                key={subCat._id}
                                                className='cursor-pointer w-72 h-88 border bg-red-900 px-0 pb-2 flex flex-col justify-center items-center rounded-lg hover:shadow-md hover:shadow-gray-700 hover:border-none  transition'
                                                onClick={() => handleSubCategoryClick(subCat.parentCategory.name, subCat.name)}
                                            >
                                                <img src={`${process.env.REACT_APP_BASE_URL}/uploads/${subCat.image}`} alt="Subcategory" className="w-[96%] h-[85%] object-cover`" />
                                                <div className='text-[1.5rem] text-white capitalize'> {subCat.name}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CatelougePage;


