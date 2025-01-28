import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { jwtDecode } from 'jwt-decode';

const ProductDetails = () => {
    const { id } = useParams();
    const [username, setUsername] = useState('');
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

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
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };
        fetchProduct();
    }, [id]);


    const onDelete = async (pId) => {
        try {
            await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/products/${pId}`);
            alert("Product deleted successfully");
            navigate('/productsManagement');
        } catch (error) {
            console.error("Error deleting product:", error);
            alert("Error deleting product.");
        }
    }

    console.log(product)

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])


    return (
        <>
            <div className='z-10 flex items-center justify-between px-10 bg-[#1f2937] py-2 mb-[0.5px] relative top-[-65px]'>
                <div >
                    <div className='text-[2rem] font-bold text-red-700  px-2'><NavLink to='/'>GLBM</NavLink> </div>
                </div>
                <div className='flex items-center'>
                    <div className='w-12 h-12 border rounded-full mr-2 flex items-center justify-center text-[1.5rem] text-white'> <FaRegUser /> </div>
                    <strong className="text-white capitalize">
                        {username ? username : 'Loading...'}
                    </strong>
                </div>
            </div>

            {product ? (
                <div className='w-full min-h-[90vh] max-h-fit my-5 '>
                    <div className="w-[60%] flex justify-between mx-auto mt-10 bg-white rounded-lg shadow-md p-4">
                        <div className='w-[50%]'>
                            <img src={`${process.env.REACT_APP_BASE_URL}/uploads/${product.image}`} alt={product.slug}
                                className="w-[100%] h-64 object-cover rounded-lg" />

                        </div >
                        <div className='w-[50%] ml-10'>
                            <h2 className="text-2xl font-bold mt-4 capitalize">{product.name}</h2>
                            <p className="text-gray-700 mt-2 capitalize">Discription : {product.description}</p>
                            <p className="text-gray-700 mt-2 capitalize">Category : {product.category.name}</p>
                            <p className="text-gray-700 my-2 capitalize">Sub Category : {product.subCategory.name}</p>
                            {/* <span className={product.status ? "text-green-500" : "text-sm text-red-600"}>Status : {product.status ? 'Active' : 'Inactive'}</span> */}
                            <div className="mt-4">
                                <Link to={`/editProduct/${product._id}`} className="text-blue-500 mr-4">Edit</Link>
                                <button className="text-red-500" onClick={() => onDelete(product._id)}>Delete</button>
                                <Link to="/productsManagement" className="text-white ml-5 bg-blue-700 px-6  rounded-md py-2">Back </Link>
                            </div>
                        </div>
                    </div>
                </div>

            ) : (
                <div className='w-full h-[60vh] flex justify-center items-center text-[3rem] font-bold text-gray-600'>
                    <p>Loading product details...</p>
                </div>
            )}

        </>
    )

};

export default ProductDetails;
