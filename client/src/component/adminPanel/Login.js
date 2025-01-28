import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/admin/login`, { username, password });
      localStorage.setItem('token', data.token);
      window.location = '/dashboard';
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md xl:w-[50%] sm:w-[90%] w-[90%]">
        <h2 className="text-2xl mb-4">Admin Login</h2>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="w-full p-2 mb-4 border rounded" />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-4 border rounded" />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
        <div className='w-full '>
          {/* <p className='text-blue-600'>Forget Password</p> */}
        </div>
      </form>
    </div>
  );
};

export default Login;
