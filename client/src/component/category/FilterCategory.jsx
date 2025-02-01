import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiMenu, FiX } from 'react-icons/fi';

const FilterCategory = () => {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeCategoryName, setActiveCategoryName] = useState('');
    const [products, setProducts] = useState([]);
    const [subCategoryId, setSubCategoryId] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showingSubcategories, setShowingSubcategories] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/categories`);
            setCategories(response.data);
        };
        fetchCategories();
    }, []);

    const fetchSubCategories = async (categoryId, categoryName) => {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/subcategories/${categoryId}`);
        setSubCategories(response.data);
        setActiveCategory(categoryId);
        setActiveCategoryName(categoryName);
        setSubCategoryId(null);
        setShowingSubcategories(true);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/products`);
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    const handleSubCategorySelect = (subCategoryId) => {
        setSubCategoryId(subCategoryId);
        setIsSidebarOpen(false);
    };

    const filteredProducts = subCategoryId
        ? products.filter((item) => item.subCategory._id === subCategoryId)
        : activeCategory
            ? products.filter((item) => item.category._id === activeCategory)
            : products;

    const resetFilters = () => {
        setActiveCategory(null);
        setActiveCategoryName('');
        setSubCategoryId(null);
        setSubCategories([]);
        setShowingSubcategories(false);
        setIsSidebarOpen(false);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])


    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header for Mobile */}
            <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center lg:hidden">
                <h1 className="text-lg font-bold">Shop by Category</h1>
                <button className="text-2xl" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    {isSidebarOpen ? <FiX /> : <FiMenu />}
                </button>
            </header>

            <div className="flex ">
                {/* Sidebar */}
                <aside
                    className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 lg:relative lg:translate-x-0 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        } lg:w-1/4 p-6`}
                >
                    {!showingSubcategories ? (
                        <div>
                            <h2 className="text-xl font-bold mb-4">Categories</h2>
                            <ul className="space-y-3">
                                <li
                                    className={`p-3 rounded-md cursor-pointer ${activeCategory === null ? 'bg-red-600 text-white' : 'hover:bg-gray-200'
                                        }`}
                                    onClick={resetFilters}
                                >
                                    All Categories
                                </li>
                                {categories.map((category) => (
                                    <li
                                        key={category._id}
                                        className={`p-3 rounded-md cursor-pointer ${activeCategory === category._id ? 'bg-red-600 text-white' : 'hover:bg-gray-200'
                                            }`}
                                        onClick={() => fetchSubCategories(category._id, category.name)}
                                    >
                                        {category.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                {/* <h2 className="text-xl font-bold">Subcategories</h2> */}
                                <button
                                    className="text-sm hover:underline bg-red-900 px-5 py-1 text-white"
                                    onClick={() => setShowingSubcategories(false)}
                                >
                                    Back to Categories
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">Active Category: {activeCategoryName}</p>
                            <ul className="space-y-3">
                                <li
                                    className="p-3 rounded-md cursor-pointer hover:bg-gray-200"
                                    onClick={() => handleSubCategorySelect(null)}
                                >
                                    All Products
                                </li>
                                {subCategories.map((subCategory) => (
                                    <li
                                        key={subCategory._id}
                                        className={`p-3 rounded-md cursor-pointer ${subCategoryId === subCategory._id ? 'bg-red-600 text-white' : 'hover:bg-gray-200'
                                            }`}
                                        onClick={() => handleSubCategorySelect(subCategory._id)}
                                    >
                                        {subCategory.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <div
                                key={product._id}
                                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <img
                                    src={`${process.env.REACT_APP_BASE_URL}/uploads/${product.image}`}
                                    alt={product.name}
                                    className="w-full h-40 p-2 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{product.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default FilterCategory;
