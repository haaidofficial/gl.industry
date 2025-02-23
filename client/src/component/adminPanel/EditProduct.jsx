import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { jwtDecode } from 'jwt-decode';

const EditProduct = () => {
    const [username, setUsername] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    const [subCategories, setSubCategories] = useState([]);
    const [categories, setCategories] = useState([]);
    const [newImage, setNewImage] = useState(null);
    const [isCategoryEditable, setIsCategoryEditable] = useState(false);
    const [isSubCategoryEditable, setIsSubCategoryEditable] = useState(false);
    const [hindi, setHindi] = useState(false)
    const [product, setProduct] = useState({
        name: '',
        description: '',
        category: '',
        subCategory: '',
        slug: '',
        status: false,
        image: null,
    });


    useEffect(() => {
        // Check for token in local storage
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/admin/login'); // Redirect to login if token is not found
        } else {
            getUsernameFromToken();
        }
    }, [])

    const getUsernameFromToken = () => {
        // Get the token from localStorage (or wherever you store it)
        const token = localStorage.getItem('token');
        if (token) {
            try {
                // Decode the token to extract user information
                const decodedToken = jwtDecode(token);
                setUsername(decodedToken.username); // Assuming the token contains a "username" field
            } catch (error) {
                console.error('Invalid token:', error);
            }
        }
    };


    useEffect(() => {
        fetchProduct();
        fetchCategories();
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/${id}`);
            const productData = response.data;
            setProduct({
                name: productData.name,
                description: productData.description,
                category: productData.category,
                subCategory: productData.subCategory,
                slug: productData.slug,
                status: productData.status,
                image: productData.image,
            });
            fetchSubCategories(productData.category);
        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/categories`);
            setCategories(response.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const fetchSubCategories = async (categoryId) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/subcategories/${categoryId}`);
            setSubCategories(response.data);
        } catch (error) {
            console.error("Error fetching subcategories:", error);
        }
    };

    const handleCategoryChange = (e) => {
        const selectedCategoryId = e.target.value;
        setProduct((prevProduct) => ({
            ...prevProduct,
            category: selectedCategoryId,
            subCategory: '',
        }));
        fetchSubCategories(selectedCategoryId);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        setNewImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("description", product.description);
        formData.append("slug", product.slug);
        formData.append("status", product.status);

        // Only append category/subCategory if the user enabled editing for them
        if (isCategoryEditable) formData.append("category", product.category);
        if (isSubCategoryEditable) formData.append("subCategory", product.subCategory);

        // Only append the image if a new one is selected
        if (newImage) {
            formData.append("image", newImage);
        }

        try {
            const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/api/products/${id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.status === 200) {
                alert('Product updated successfully');
                navigate('/productsManagement');
            } else {
                alert('Error updating product!');
            }
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Error updating product.');
        }
    };

    const changeToHindi = () => {
        !hindi ? setHindi(true) : setHindi(false)
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])


    return (
        <>
            <div className='z-10 flex items-center justify-between px-10 bg-[#1f2937] py-2 mb-[0.5px] relative top-[-65px]'>
                <div >
                <div className="text-[2rem] font-bold text-red-700 px-2">
                    <NavLink to="/">G.L Industries</NavLink>
                </div>
                </div>
                <div className='flex items-center'>
                    <div className='w-12 h-12 border rounded-full mr-2 flex items-center justify-center text-[1.5rem] text-white'> <FaRegUser /> </div>
                    <strong className="text-white capitalize">
                        {username ? username : 'Loading...'}
                    </strong>
                </div>
            </div>
            <Link to="/productsManagement" className='m-10 bg-[#1f2937] w-fit px-5 py-1 text-white text-[20px]'> Back</Link>
            <div className='w-full pt-4 bg-gray-200 shadow-xl mt-[-60px] '>
                <div className='w-[70%] relative mx-auto h-fit pt-4 py-6 rounded-md px-10 bg-red-200 text-[14px] text-gray-800'>
                    <p>{hindi ? "Agar aap category mein changes karna chahte hain, toh category checkbox ko check karna zaroori hai, warna iski zaroorat nahi hai. Agar aap category checkbox ko check karte hain, toh aapko subcategory checkbox ko bhi check karna hoga aur ek subcategory item select karna hoga." : "You need to check the category checkbox if you want to make changes to the category. Otherwise, there's no need to check it. If you do select the category checkbox, you must also check the subcategory checkbox and select a subcategory item."} </p>
                    <div onClick={() => changeToHindi()} className='cursor-pointer text-white w-fit absolute right-10 px-3  bg-blue-600'>{hindi ? "English" : "Hindi"}</div>
                </div>

            </div>
            <div className='w-full min-h-[90vh] flex items-center justify-center bg-gray-200 mb-2 pb-10'>
                <form onSubmit={handleSubmit} className="bg-white p-6 my-5 rounded-lg shadow-lg max-w-2xl mx-auto space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        placeholder="Product Name"
                        className="border p-2 w-full rounded"
                        required
                    />

                    {/* Toggle for category editing */}
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={isCategoryEditable}
                            onChange={() => setIsCategoryEditable(!isCategoryEditable)}
                        />
                        <span>Edit Category</span>
                    </label>
                    <select
                        name="category"
                        value={product.category}
                        onChange={handleCategoryChange}
                        className="border p-2 w-full rounded"
                        required
                        disabled={!isCategoryEditable} // Disable if editing not enabled
                    >
                        <option value="">Select Category</option>
                        {categories.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.name}
                            </option>
                        ))}
                    </select>

                    {/* Toggle for subcategory editing */}
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={isSubCategoryEditable}
                            onChange={() => setIsSubCategoryEditable(!isSubCategoryEditable)}
                        />
                        <span>Edit Subcategory</span>
                    </label>
                    <select
                        name="subCategory"
                        value={product.subCategory}
                        onChange={handleChange}
                        className="border p-2 w-full rounded"
                        required
                        disabled={!isSubCategoryEditable || !product.category} // Disable if not editable or no category
                    >
                        <option value="">Select Subcategory</option>
                        {subCategories.map((subCategory) => (
                            <option key={subCategory._id} value={subCategory._id}>
                                {subCategory.name}
                            </option>
                        ))}
                    </select>

                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        placeholder="Description"
                        className="border p-2 w-full rounded"
                        required
                    />

                    <input
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                        className="border p-2 w-full rounded"
                    />

                    <input
                        type="text"
                        name="slug"
                        value={product.slug}
                        onChange={handleChange}
                        placeholder="Product Slug"
                        className="border p-2 w-full rounded"
                        required
                    />

                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="status"
                            checked={product.status}
                            onChange={() => setProduct({ ...product, status: !product.status })}
                        />
                        <span>Active</span>
                    </label>

                    <button type="submit" className="bg-blue-500 w-full text-white px-4 py-2 rounded">Update</button>
                </form>
            </div>
        </>
    );
};

export default EditProduct;
