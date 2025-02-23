import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import SideBar from "../adminPanel/Sidebar";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdCancel } from "react-icons/md";

const SubCategoryManagement = () => {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [name, setName] = useState('');
    const [parentCategory, setParentCategory] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('true');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [editId, setEditId] = useState(null);
    const [openSideBar, setSideBar] = useState(false);
    const [subCategoryForm, setSubCategoryForm] = useState(false);
    const [filterCategory, setFilterCategory] = useState('')

    const navigate = useNavigate();

    // Redirect to login if token is missing
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/admin/login'); // Redirect to login page
        }
    }, [navigate]);

    useEffect(() => {
        fetchCategories();
        fetchSubCategories();
    }, []);

    const fetchSubCategories = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/subcategories`);
            setSubCategories(response.data);
        } catch (error) {
            console.error("Error fetching subcategories:", error);
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

    const handleAddOrEditCategory = async () => {
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('parentCategory', parentCategory);
            formData.append('description', description);
            formData.append('status', status);
            if (image) {
                formData.append('image', image);
            }

            if (editId) {
                await axios.put(`${process.env.REACT_APP_BASE_URL}/api/subcategories/${editId}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                setSuccess('Subcategory updated successfully');
            } else {
                await axios.post(`${process.env.REACT_APP_BASE_URL}/api/subcategories`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                setSuccess('Subcategory created successfully');
            }
            fetchSubCategories();
            resetForm();
        } catch (error) {
            console.error('Error:', error);
            setError(error.message, 'An error occurred while processing the subcategory');
        }
    };


    const handleDeleteCategory = async (id) => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/subcategories/${id}`);
            if (response.status === 200) {
                setCategories(categories.filter((category) => category._id !== id));
                alert("Category deleted successfully!");
                fetchSubCategories();
            }
        } catch (error) {
            console.log("Error:", error.response?.data?.message || "Error deleting category");
            setError('An error occurred while deleting the subcategory');
            alert(error.response?.data?.message || "Error deleting category");
        }
    };

    const handleEditCategory = (subcategory) => {
        setEditId(subcategory._id);
        setName(subcategory.name);
        setParentCategory(subcategory.parentCategory);
        setDescription(subcategory.description);
        setStatus(subcategory.status ? 'true' : 'false');
        setSuccess('');
        setError('');
    };

    const resetForm = () => {
        setEditId(null);
        setName('');
        setParentCategory('');
        setDescription('');
        setStatus('true');
        setSuccess('');
        setError('');
    };

    const handleSideBar = () => {
        setSideBar(!openSideBar);
    };

    const handleAddSubCategoryForm = () => {
        setSubCategoryForm(!subCategoryForm);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);


    return (

        <>

            <div className='ml-1  text-white text-[1.1rem] w-fit  cursor-pointer ' onClick={handleSideBar}>
                {!openSideBar ? <MdOutlineSpaceDashboard className='text-[2rem] text-[#1f2937]' /> : <MdCancel className='text-[2rem] text-[#1f2937]' />}
            </div>
            <div className='ml-40 w-[300px] h-10 flex justify-between items-center'>
                <div className='text-xl w-fit ml-1'>
                    Filter Category:
                </div>
                <select
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="px-2 border h-10 border-gray-300 rounded w-40 capitalize"
                    value={filterCategory}
                >
                    <option value="">All Category</option>
                    {categories.map((category) => (
                        <option value={category._name} key={category._id} className="mb-2 ">
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className='flex mt-0 '>
                <div>
                    <div className=''>  {openSideBar ? <div className='ml-0 transition-all'><SideBar /></div> : <div className='ml-[-400px] transition-all'><SideBar /></div>}</div>
                </div>

                <div className='w-full flex xl:flex-row md:flex-col sm:flex-col flex-col justify-between px-2 xl:min-h-[80vh] md:min-h-fit sm:min-h-fit max-h-fit my-10'>

                    <div
                        className='xl:hidden md:flex sm:flex flex bg-blue-700 text-white w-fit px-4 py-2 cursor-pointer'
                        onClick={handleAddSubCategoryForm}
                    >
                        {!subCategoryForm ? "Add SubCategory" : "Close"}
                    </div>

                    {<div className={subCategoryForm ? 'xl:block' : 'xl:block md:hidden sm:hidden hidden xl:w-[35%] md:w-[100%] sm:w-[100%] w-[100%] xl:order-2 md:order-1 sm:order-1 order-1 mr-6 '}>
                        <h2 className="text-2xl font-bold mb-4">{editId ? 'Edit' : 'Add'} SubCategory</h2>
                        <input
                            type="text"
                            placeholder="Subcategory Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="p-2 border border-gray-300 rounded mb-4 w-full"
                        />
                        <select
                            onChange={(e) => setParentCategory(e.target.value)}
                            className="p-2 border border-gray-300 rounded mb-4 w-full"
                            value={parentCategory}
                        >
                            <option>Select Category</option>
                            {categories.map((category) => (
                                <option value={category._id} key={category._id} className="mb-2">
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <select
                            onChange={(e) => setStatus(e.target.value)}
                            className="p-2 border border-gray-300 rounded mb-4 w-full"
                            value={status}
                        >
                            <option value="true">Active</option>
                            <option value="false">Inactive</option>
                        </select>
                        <textarea
                            name="description"
                            placeholder="Description..."
                            rows="4"
                            className="p-2 border border-gray-300 rounded mb-4 w-full"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                            className="p-2 border border-gray-300 rounded mb-4 w-full"
                        />
                        <button
                            onClick={handleAddOrEditCategory}
                            className="bg-blue-500 text-white p-2 rounded w-full"
                        >
                            {editId ? 'Update' : 'Add'} Subcategory
                        </button>
                        <button
                            onClick={resetForm}
                            className="bg-gray-500 text-white p-2 rounded mt-2 w-full"
                        >
                            Cancel
                        </button>
                        {success && <p className="text-green-500 mt-4">{success}</p>}
                        {error && <p className="text-red-500 mt-4">{error}</p>}
                    </div>}

                    <div className='h-[75vh] overflow-y-scroll xl:w-[60%] sm:w-[100%] w-[100%]'>
                        <table className=" xl:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] border xl:order-1 md:order-2 sm:order-2 order-2 my-5">
                            <thead>
                                <tr className='h-12 bg-[#3b82f6] text-white'>
                                    <th>Sr.</th>

                                    <th>Main Category</th>
                                    <th>Sub Category</th>
                                    <th>Image</th>
                                    <th>Description</th>
                                    {/* <th>Status</th> */}
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subCategories.filter((item)=> filterCategory !== "" ? item.parentCategory.name === filterCategory : subCategories).map((subcategory, index) => (
                                    <tr key={subcategory._id} className='capitalize text-center h-11 border'>
                                        <td>{index + 1}</td>

                                        <td>{subcategory.parentCategory?.name || "N/A"}</td>
                                        <td>{subcategory.name}</td>
                                        <td>
                                            {
                                                <img src={`${process.env.REACT_APP_BASE_URL}/uploads/${subcategory.image}`} alt="Subcategory" className="w-16 h-16 object-cover mx-auto" />
                                            }
                                        </td>
                                        <td>{subcategory.description}</td>
                                        {/* <td>{subcategory.status === 'true' ? "Active" : "Inactive"}</td> */}
                                        <td className='flex items-center justify-center h-11'>
                                            <FaEdit className='text-xl text-blue-700 mr-1 cursor-pointer' onClick={() => handleEditCategory(subcategory)} />
                                            <MdDelete className='text-2xl text-red-700 ml-2 cursor-pointer' onClick={() => handleDeleteCategory(subcategory._id)} />
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

export default SubCategoryManagement;
