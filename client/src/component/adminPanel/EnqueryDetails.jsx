import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const EnqueryDetails = () => {
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Check for token in local storage
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/admin/login');
        } else {
            fetchEnquiries();
        }

        // Scroll to top on page load
        window.scrollTo({ top: 0, behavior: 'smooth' });

    }, []); // Removed `enquiries` from dependencies to prevent infinite re-renders

    const fetchEnquiries = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/contact`);
            
            // Sort enquiries so the latest ones come first
            const sortedEnquiries = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
            setEnquiries(sortedEnquiries);
            setLoading(false);
    
            // Mark all enquiries as "seen" in localStorage
            const seenEnquiryIds = sortedEnquiries.map(enquiry => enquiry._id);
            localStorage.setItem("seenEnquiries", JSON.stringify(seenEnquiryIds));
        } catch (error) {
            console.error("Failed to fetch enquiries:", error);
            setLoading(false);
        }
    };
    

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/contact/${id}`);
            alert("Enquiry deleted successfully.");

            // Remove deleted enquiry from state
            setEnquiries(prevEnquiries => prevEnquiries.filter(enquiry => enquiry._id !== id));
        } catch (error) {
            alert("Something went wrong. Please try again.");
            console.error("Error deleting enquiry:", error);
        }
    };

    const formatDate = (isoString) => {
        return new Date(isoString).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
    };

    return (
        <div className="min-h-screen bg-[#fecaca] text-white p-6">
            <Link to='/dashboard' className="bg-white text-[#1f2937] py-1 px-4 rounded-md">Back</Link>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">All Enquiries</h1>
                {loading ? (
                    <p className="text-center text-gray-400">Loading enquiries...</p>
                ) : enquiries.length > 0 ? (
                    <div className="overflow-x-auto bg-gray-800 p-6 rounded-lg shadow-md">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-700 text-gray-400">
                                    <th className="p-3 border-b border-gray-600">Name</th>
                                    <th className="p-3 border-b border-gray-600">Mobile No.</th>
                                    <th className="p-3 border-b border-gray-600">Email</th>
                                    <th className="p-3 border-b border-gray-600">Message</th>
                                    <th className="p-3 border-b border-gray-600">Date</th>
                                    <th className="p-3 border-b border-gray-600">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {enquiries.map((enquiry) => (
                                    <tr key={enquiry._id} className="hover:bg-gray-700">
                                        <td className="p-3 border-b border-gray-600">{enquiry.name}</td>
                                        <td className="p-3 border-b border-gray-600">{enquiry.mobile}</td>
                                        <td className="p-3 border-b border-gray-600">{enquiry.email}</td>
                                        <td className="p-3 border-b border-gray-600">{enquiry.message}</td>
                                        <td className="p-3 border-b border-gray-600">{formatDate(enquiry.createdAt)}</td>
                                        <td
                                            className="p-3 border-b border-gray-600 text-red-600 cursor-pointer hover:text-red-400"
                                            onClick={() => handleDelete(enquiry._id)}
                                        >
                                            Remove
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-center text-gray-400">No enquiries found.</p>
                )}
            </div>
        </div>
    );
};

export default EnqueryDetails;





// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useNavigate,  } from "react-router-dom";

// const EnqueryDetails = () => {

//     const [enquiries, setEnquiries] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate(); // Initialize navigation

//     useEffect(() => {
//         // Check for token in local storage
//         const token = localStorage.getItem('token');
//         if (!token) {
//             navigate('/admin/login'); // Redirect to login if token is not found
//         } else {
//             fetchEnquiries();
//         }

//     }, [enquiries]);

//     const fetchEnquiries = async () => {
//         try {
//             const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/contact`);
//             setEnquiries(response.data);
//             setLoading(false);
//         } catch (error) {
//             console.error("Failed to fetch enquiries:", error);
//             setLoading(false);
//         }
//     };

//     const handleDelete = async (id) => {
//         const responce = await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/contact/${id}`)

//         if (responce) {
//             alert("Enquery Delete Successfully.")
//         } else {
//             alert("something went wrong. ")
//         }
//     }

//     useEffect(() => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     }, [])

//     return (
//         <div className="min-h-screen bg-[#fecaca] text-white p-6">
//             <Link to='/dashboard' className="bg-white text-[#1f2937] py-1 px-4 rounded-md"> Back</Link>
//             <div className="max-w-5xl mx-auto">
//                 <h1 className="text-4xl font-bold mb-6 text-center">All Enquiries</h1>
//                 {loading ? (
//                     <p className="text-center text-gray-400">Loading enquiries...</p>
//                 ) : enquiries.length > 0 ? (
//                     <div className="overflow-x-auto bg-gray-800 p-6 rounded-lg shadow-md">
//                         <table className="w-full text-left border-collapse">
//                             <thead>
//                                 <tr className="bg-gray-700 text-gray-400">
//                                     <th className="p-3 border-b border-gray-600">Name</th>
//                                     <th className="p-3 border-b border-gray-600">Mobile No.</th>
//                                     <th className="p-3 border-b border-gray-600">Email</th>
//                                     <th className="p-3 border-b border-gray-600">Message</th>
//                                     <th className="p-3 border-b border-gray-600">Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {enquiries.map((enquiry) => (
//                                     <tr key={enquiry._id} className="hover:bg-gray-700">
//                                         <td className="p-3 border-b border-gray-600">{enquiry.name}</td>
//                                         <td className="p-3 border-b border-gray-600">{enquiry.mobile}</td>
//                                         <td className="p-3 border-b border-gray-600">{enquiry.email}</td>
//                                         <td className="p-3 border-b border-gray-600">{enquiry.message}</td>
//                                         <td className="p-3 border-b border-gray-600 text-red-600 cursor-pointer"
//                                             onClick={() => handleDelete(enquiry._id)}>Remove</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 ) : (
//                     <p className="text-center text-gray-400">No enquiries found.</p>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default EnqueryDetails
