import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SideBar from "../adminPanel/Sidebar"
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdCancel } from "react-icons/md";

const ProductManagement = () => {
    const [product, setProduct] = useState([])
    const [openSideBar, setSideBar] = useState(false)
    const navigate = useNavigate()

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

            <div className='flex '>
                <div>
                    <div>{openSideBar ? <div className='ml-0 transition-all '><SideBar /></div> : <div className='ml-[-400px] transition-all'><SideBar /></div>}</div>
                </div>
                <div className='w-full mt-2 '>
                    <div className='mx-auto bg-red-200 w-[95%] '>
                        <div className='flex mb-3 flex-wrap px-2 items-center justify-center  h-[80vh] overflow-y-scroll'>
                            {product.length > 0 ? product.map((product, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="cursor-pointer m-2 border w-48 h-fit rounded-lg  p-4 shadow-md flex flex-col items-start bg-white"
                                        onClick={() => handleProductDetails(product._id)}
                                    >
                                        <img
                                            className='w-[200px] h-[140px]  rounded-xl'
                                            src={`${process.env.REACT_APP_BASE_URL}/uploads/${product.image}`} alt={product.slug}
                                        />
                                        <h2 className="font-bold text-lg">{product.name}</h2>
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
