import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigation = useNavigate()
    // Simulate a logged-in state. Replace this with your actual logic for checking login status.
    const isLoggedIn = Boolean(localStorage.getItem('token')); // Example: using a token in localStorage

    useEffect(() => {
        if (!isLoggedIn) {
            return navigation("/admin/login")
        }
    }, [])

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])


    return (
        <div className="min-h-[87vh] my-1 flex">
            <Sidebar />

            <main className="flex-1 p-8 bg-gray-100 flex-col flex justify-center items-center">
                <h1 className="text-3xl font-bold">Welcome to G.L Industries</h1>
                <p>Use the sidebar to manage categories, subcategories, and products.</p>
            </main>
        </div>
    );
};

export default Dashboard;
