import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import SideBar from "../adminPanel/Sidebar"
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdCancel } from "react-icons/md"; 


const CategoryManagement = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('true');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [editingId, setEditingId] = useState(null); // New state for editing
    const [openSideBar, setSideBar] = useState(false)
    const [CategoryForm, setCAtegoryForm] = useState(false)
    
    const BASE_URL = process.env.REACT_APP_BASE_URL;
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
                const response = await axios.get(`${BASE_URL}/api/categories`);
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
   
    console.log("object")

    const handleAddOrUpdateCategory = async () => {
        setError('');
        setSuccess('');

        const categoryData = {
            name,
            description,
            status: status === "true"
        };

        try {
            if (editingId) {
                // Update category
                const response = await axios.put(`${BASE_URL}/api/categories/${editingId}`, categoryData);
                if (response.status === 200) {
                    setSuccess('Category updated successfully');
                    // Update local categories state
                    setCategories(categories.map(category =>
                        category._id === editingId ? { ...category, ...categoryData } : category
                    ));
                } else {
                    setError('Error updating category');
                }
            } else {
                // Add new category
                const response = await axios.post(`${BASE_URL}/api/categories`, categoryData);
                if (response.status === 201) {
                    setSuccess('Category created successfully');
                    // Update local categories state
                    setCategories([...categories, response.data]); // Append the new category
                } else {
                    setError('Error creating category');
                }
            }
            // Reset form fields
            resetForm();
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while processing your request');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/api/categories/${id}`);
            // Update local state immediately after deletion
            setCategories(categories.filter(category => category._id !== id));
            alert("Category deleted successfully!");
        } catch (error) {
            console.log("Error:", error);
            setError('An error occurred while deleting the category');
        }
    };

    const handleEdit = (category) => {
        setEditingId(category._id); // Set the ID of the category to edit
        setName(category.name);
        setDescription(category.description);
        setStatus(category.status.toString());
    };

    const resetForm = () => {
        setEditingId(null);
        setName('');
        setDescription('');
        setStatus('true');
    };

    const handleSideBar = () => {
        !openSideBar ? setSideBar(true) : setSideBar(false)
    }

    const handleAddCategoryForm = () => {
        !CategoryForm ? setCAtegoryForm(true) : setCAtegoryForm(false)
    }

    return (
        <>
       
            <div className='ml-1  text-white text-[1.1rem] w-fit  cursor-pointer ' onClick={handleSideBar}>
                {!openSideBar ? <MdOutlineSpaceDashboard className='text-[2rem] text-[#1f2937]' /> : <MdCancel className='text-[2rem] text-[#1f2937]' />}
            </div>
            <div className='flex '>
                <div className=''>  {openSideBar ? <div className='ml-0 transition-all'><SideBar /></div> : <div className='ml-[-400px] transition-all'><SideBar /></div>}</div>

                <div className='w-full'>
                    <div className='w-full flex justify-between px-2 xl:h-[80vh] md:h-fit sm:h-fit h-fit mt-10 xl:flex-row md:flex-col sm:flex-col flex-col'>
                        <div
                            className='xl:hidden md:flex sm:flex flex bg-blue-700 text-white w-fit px-4 py-2 cursor-pointer'
                            onClick={handleAddCategoryForm}
                        >
                            {!CategoryForm ? "Add Category" : "Close"}
                        </div>

                        <div className={CategoryForm ? 'xl:block' : 'xl:block md:hidden sm:hidden hidden xl:w-[35%] md:w-[100%] sm:w-[100%] w-[100%] xl:order-2 md:order-1 sm:order-1 order-1 mr-6 '}>
                            <h2 className="text-2xl font-bold mb-4">Manage Categories</h2>
                            <input
                                type="text"
                                placeholder="Category Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="p-2 border border-gray-300 rounded mb-4 w-full"
                            />
                            <textarea
                                name="description"
                                placeholder="Description..."
                                rows="4"
                                cols="50"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="p-2 border border-gray-300 rounded mb-4 w-full"
                            />
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="p-2 border border-gray-300 rounded mb-4 w-full"
                            >
                                <option value="true">Active</option>
                                <option value="false">Inactive</option>
                            </select>
                            <button
                                onClick={handleAddOrUpdateCategory}
                                className="bg-blue-500 text-white p-2 rounded xl:w-[100%] md:w-[100%] lg:w-[100%] sm:w-[100%] w-[100%]"
                            >
                                {editingId ? 'Update Category' : 'Add Category'}
                            </button>

                            {success && <p className="text-green-500 mt-4">{success}</p>}
                            {error && <p className="text-red-500 mt-4">{error}</p>}
                        </div>
                        <table className=" xl:w-[60%] md:w-[100%] sm:w-[100%] w-[100%] h-fit border xl:order-1 md:order-2 sm:order-2 order-2 my-5 ">
                            <thead>
                                <tr className='h-12 text-lg bg-[#3b82f6] text-white'>
                                    <th>Sr.</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    {/* <th>Status</th> */}
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category, index) => (
                                    <tr key={category._id} className='capitalize text-center h-11 border'>
                                        <td>{index + 1}</td>
                                        <td>{category.name}</td>
                                        <td>{category.description}</td>
                                        {/* <td>{category.status ? "Active" : "Inactive"}</td> */}
                                        <td className='flex items-center justify-center h-11'>
                                            <FaEdit
                                                onClick={() => handleEdit(category)}
                                                className='text-xl text-blue-700 mr-1 cursor-pointer'
                                            />
                                            <MdDelete
                                                onClick={() => handleDelete(category._id)}
                                                className='text-2xl text-red-700 ml-2 cursor-pointer'
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>




        </>
    );
};

export default CategoryManagement;
