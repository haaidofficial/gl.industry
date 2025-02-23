import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SideBar from "../adminPanel/Sidebar"
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdCancel } from "react-icons/md";


const ProductManagement = () => {
    const [product, setProduct] = useState([])
    const [openSideBar, setSideBar] = useState(false)
    const [filterProduct, setFilterProduct] = useState('')
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate()

    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/categories`);
            setCategories(response.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const getProduct = async () => {
        try {
            const responce = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/products`)
            if (responce) {
                setProduct(responce.data)
                console.log("success")
            }
        } catch (error) {
            console.log("error", error)
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/admin/login'); // Redirect to login if token is not found
        } else {
            getProduct()
        }
    }, [navigate])

    const handleProductDetails = (pId) => {
        navigate(`/productDetails/${pId}`)
    }

    const handleSideBar = () => {
        !openSideBar ? setSideBar(true) : setSideBar(false)
    }
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])


    return (
        <div className='w-full mx-auto '>

            <div className='w-full flex items-center justify-between pl-1 pr-5 mt-5'>
                <div className='ml-1 text-white text-[1.1rem] w-fit  cursor-pointer' onClick={handleSideBar}>
                    {!openSideBar ? <MdOutlineSpaceDashboard className='text-[2rem] text-[#1f2937]' /> : <MdCancel className='text-[2rem] text-[#1f2937]' />}
                </div>
                <div>
                    <Link className='text-white rounded-md bg-blue-800 py-[6px] px-4' to="/createProduct">Create New Product</Link>
                </div>
            </div>
            <div className='ml-40 w-[300px] h-10 flex justify-between items-center'>
                <div className='text-xl w-fit ml-1'>
                    Filter Product:
                </div>
                <select
                    onChange={(e) => setFilterProduct(e.target.value)}
                    className="px-2 border h-10 border-gray-300 rounded w-40 capitalize"
                    value={filterProduct}
                >
                    <option value="">All Category</option>
                    {categories.map((category) => (
                        <option value={category._name} key={category._id} className="mb-2 ">
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className='flex '>
                <div>
                    <div>{openSideBar ? <div className='ml-0 transition-all '><SideBar /></div> : <div className='ml-[-400px] transition-all'><SideBar /></div>}</div>
                </div>
                <div className='w-full mt-2 '>
                    <div className='mx-auto bg-red-200 w-[98%] h-fit'>
                        <div className='flex gap-6 flex-wrap items-start justify-stert min-h-[80vh] max-h-fit overflow-y-scroll'>
                            {product.length > 0 ? product.filter((items)=> filterProduct !== "" ? items.category.name === filterProduct : product).map((product, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="cursor-pointer m-2 border xl:w-72 md:w-72 sm:w-[98%] w-[98%] min-h-40 mix-h-fit rounded-lg p-2 shadow-md flex flex-col items-start bg-white"
                                        onClick={() => handleProductDetails(product._id)}
                                    >
                                        <img
                                            className='w-[100%] h-68  rounded-xl'
                                            src={`${process.env.REACT_APP_BASE_URL}/uploads/${product.image}`} alt={product.slug}
                                        />
                                        <h2 className="font-bold text-lg text-center">{product.name}</h2>
                                        {/* <p className="text-gray-500 ">{product.description}</p> */}
                                        {/* <span className="text-sm text-gray-600">Status: {product.status ? 'Active' : 'Inactive'}</span> */}

                                    </div>)
                            }) : <div className='w-full h-[70vh] bg-gray-100 flex justify-center items-center'>
                                <p className='text-[3rem] font-bold text-gray-400 '> No Products</p>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductManagement
