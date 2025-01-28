import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FirstSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin'); // Default role is 'admin' since this is for creating an admin
  const [isAdminAvailable, setIsAdminAvailable] = useState(false);
  const navigate = useNavigate();

  // Function to check if an admin user exists
  const getUser = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/admin/loginUser`);
      const roles = response.data.map((user) => user.role); // Extract roles
      setIsAdminAvailable(roles.includes('admin')); // Check if 'admin' role exists
    } catch (error) {
      console.error('Error fetching user roles:', error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const createUser = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/admin/firstSignup`,
        { username, password, role },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // Clear input fields
      setUsername('');
      setPassword('');
      setRole('admin'); // Reset role to 'admin'
      alert('Admin user created successfully');
      navigate('/admin/login'); // Redirect after successful signup
    } catch (err) {
      // Handle error and clear input fields
      alert(err.response?.data?.message || 'Error creating admin user');
      setUsername('');
      setPassword('');
      setRole('admin');
    }
  };

  // Render logic
  if (isAdminAvailable) {
    return (
      <div className="p-4 flex w-full justify-center items-center h-[80vh] flex-col">
        <h2 className="text-2xl text-red-500">An admin user already exists. Signup is disabled.</h2>
      </div>
    );
  }

  return (
    <>
      <div className="mt-5"></div>
      <div className="p-4 flex w-full justify-center items-center h-[80vh] flex-col">
        <h2 className="text-2xl mb-4">Create Admin</h2>
        <form onSubmit={createUser} className="bg-white p-6 rounded shadow-md w-1/2">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            disabled // Prevent changing the role since it must be 'admin'
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Create Admin
          </button>
        </form>
      </div>
    </>
  );
};

export default FirstSignup;



// _id
// 6784ae7072de61f3b54dda6f
// username
// "testAdmin"
// password
// "$2a$10$iNDAPtQI3mQohkhRjRb/vu9fOhDez1bLQIRWFdNYO2CwgFDKIUjme"
// role
// "admin"
// __v
// 0




// import React, { useEffect, useState } from 'react';




// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// const FirstSignup = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('');
//   const navigate = useNavigate();
//   const [user, setUser] = useState("")

//   const getUser = async()=>{
//     const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/admin/loginUser`);
//     setUser(response.data.role);
//   }

// useEffect(()=>{
//   getUser()
// },[])

// console.log(user)
//   const createUser = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');
//     try {
//       await axios.post(`${process.env.REACT_APP_BASE_URL}/api/admin/firstSignup`, { username, password, role }, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       // Clear input fields
//       setUsername('');
//       setPassword('');
//       setRole('');
//       alert('User created successfully');
//     } catch (err) {
//       // Handle error and clear input fields
//       alert(err.response?.data?.message || 'Error creating user');
//       setUsername('');
//       setPassword('');
//       setRole('');
//     }
//   };

//   return (
//     <>
//       <div className="mt-5">
//       </div>
//       <div className="p-4 flex w-full justify-center items-center h-[80vh] flex-col">
//         <h2 className="text-2xl mb-4">Create Admin</h2>
//         <form onSubmit={createUser} className="bg-white p-6 rounded shadow-md w-1/2">
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full p-2 mb-4 border rounded"
//           />
//           <input
//             type="text"
//             placeholder="Role"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             className="w-full p-2 mb-4 border rounded"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 mb-4 border rounded"
//           />
//           <button type="submit" className="bg-green-500 text-white p-2 rounded">
//             Create admin
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default FirstSignup;
