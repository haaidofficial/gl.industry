import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const CreateProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        category: '',
        subCategory: '',
        slug: '',
        status: false,
        image: null,
    });
    const [subCategories, setSubCategories] = useState([]);
    const [categories, setCategories] = useState([]);
    const [image, setImage] = useState(null);
    const navigate = useNavigate(); // Initialize navigation

    useEffect(() => {
        // Check for token in local storage
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/admin/login'); // Redirect to login if token is not found
        } else {
            fetchCategories();
        }
    }, []);


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
            setSubCategories(response.data); // Assuming `response.data` returns an array of subcategories
        } catch (error) {
            console.error("Error fetching subcategories:", error);
        }
    };

    const handleCategoryChange = (e) => {
        const selectedCategoryId = e.target.value;
        setProduct((prevProduct) => ({
            ...prevProduct,
            category: selectedCategoryId,
            subCategory: '', // Reset subcategory when category changes
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
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("description", product.description);
        formData.append("category", product.category);
        formData.append("subCategory", product.subCategory);
        formData.append("slug", product.slug);
        formData.append("status", product.status);
        if (image) {
            formData.append("image", image);
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/products`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.status === 201) {
                alert('Product created successfully');
                setProduct({
                    name: '',
                    description: '',
                    category: '',
                    subCategory: '',
                    slug: '',
                    status: false,
                });
                setImage(null);
            } else {
                alert('Error creating product!');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error creating product.');
        }
    };

    return (
        <>
            <div className='w-full min-h-[90vh] bg-gray-200 py-10'>
                <Link to="/productsManagement" className='mx-10 mt-5 my-5 bg-[#1f2937] w-fit px-5 py-1 text-white text-[20px]'> Back</Link>
                <div className='flex items-center justify-center-200'>

                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto space-y-4">
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            placeholder="Product Name"
                            className="border p-2 w-full rounded"
                            required
                        />
                        <select
                            name="category"
                            value={product.category}
                            onChange={handleCategoryChange}
                            className="border p-2 w-full rounded"
                            required
                        >
                            <option value="">Select Category</option>
                            {categories.map((category) => (
                                <option key={category._id} value={category._id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <select
                            name="subCategory"
                            value={product.subCategory}
                            onChange={handleChange}
                            className="border p-2 w-full rounded"
                            required
                            disabled={!product.category}
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
                        <button type="submit" className="bg-blue-500 w-full text-white px-4 py-2 rounded">Save</button>
                    </form>
                </div>
            </div>

        </>

    );
};

export default CreateProduct;
