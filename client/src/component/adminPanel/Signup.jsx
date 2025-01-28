import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check for token in local storage
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin/login'); // Redirect to login if token is not found
    }
  }, [navigate]);

  const createUser = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/api/admin/users`, { username, password, role }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Clear input fields
      setUsername('');
      setPassword('');
      setRole('');
      alert('User created successfully');
    } catch (err) {
      // Handle error and clear input fields
      alert(err.response?.data?.message || 'Error creating user');
      setUsername('');
      setPassword('');
      setRole('');
    }
  };

  return (
    <>
      <div className="mt-5">
        <Link to="/dashboard" className="ml-10 px-4 text-[1.2rem] py-1 rounded-none bg-[#1f2937] text-white">
          Back
        </Link>
      </div>
      <div className="p-4 flex w-full justify-center items-center h-[80vh] flex-col">
        <h2 className="text-2xl mb-4">Create User</h2>
        <form onSubmit={createUser} className="bg-white p-6 rounded shadow-md w-1/2">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Create User
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
