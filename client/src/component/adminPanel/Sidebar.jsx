import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigation = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigation(`/`);
    }

    return (
        <div className="min-h-[84vh] my-1 flex">
            <aside className="w-64 bg-gray-800 text-white p-4 relative ml-1">
                <h2 className="text-2xl font-bold bg-white text-center py-2 rounded-3xl text-[#1f2937] mb-10">Admin Panel</h2>
                <nav>
                    <ul>
                        <li className="mb-4">
                            <Link to="/categories" className="hover:text-gray-300">Manage Categories</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/subcategories" className="hover:text-gray-300">Manage Subcategories</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/productsManagement" className="hover:text-gray-300">Manage Products</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/customerEnquery" className="hover:text-gray-300">Customer Enquery</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/setting" className="hover:text-gray-300">Manage Setting</Link>
                        </li>
                    </ul>
                </nav>
                <div className='w-full text-center flex justify-center absolute bottom-5 right-2'>
                    <div className='w-[70%] hover:scale-110 transition-all bg-white text-black py-2 cursor-pointer' onClick={handleLogout}>
                        Sign out
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar
