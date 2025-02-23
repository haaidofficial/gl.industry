import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AdminSliderPage = () => {
  const [slides, setSlides] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [editingSlide, setEditingSlide] = useState(null);
  const navigate = useNavigate(); // Initialize navigation

  // Fetch all slides
  useEffect(() => {
    // Check for token in local storage
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin/login'); // Redirect to login if token is not found
    } else {
      fetchSlides();
    }
  }, [navigate]);

  const fetchSlides = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/slides`);
      setSlides(response.data);
    } catch (error) {
      console.error("Error fetching slides:", error);
    }
  };

  // Handle form submission for adding/updating slides
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    try {
      if (editingSlide) {
        // Update slide
        await axios.put(
          `${process.env.REACT_APP_BASE_URL}/api/slides/${editingSlide._id}`,
          formData
        );
        alert("Slide updated successfully");
      } else {
        // Add new slide
        await axios.post(`${process.env.REACT_APP_BASE_URL}/api/slides`, formData);
        alert("Slide added successfully");
      }

      // Refresh slides and reset form
      fetchSlides();
      resetForm();
    } catch (error) {
      console.error("Error saving slide:", error);
    }
  };

  // Handle delete slide
  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this slide?")) {
        await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/slides/${id}`);
        alert("Slide deleted successfully");
        fetchSlides();
      }
    } catch (error) {
      console.error("Error deleting slide:", error);
    }
  };

  // Reset form state
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setImage(null);
    setEditingSlide(null);
  };

  // Populate form with slide data for editing
  const handleEdit = (slide) => {
    setTitle(slide.title);
    setDescription(slide.description);
    setEditingSlide(slide);
  };
console.log(slides)
  return (
    <>

      <div className='mt-5'>
        <Link to='/dashboard' className='ml-10 px-4 text-[1.2rem]  py-1 rounded-none bg-[#1f2937] text-white'>Back</Link>
      </div>
      <div className="container xl:w-[80%] md:w-[80%] mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Manage Slider</h1>

        {/* Form for adding/updating slides */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-8 w-[60%] mx-auto border-dashed border-black/8 border p-5">
          {/* <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            ></textarea>
          </div> */}
          <div>
            <label className="block text-sm font-medium ">Image (Max Image size 20MB.)</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full mt-1 "
            
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-[#374151] w-[100%] text-white py-2 px-4 rounded-lg"
            >
              {editingSlide ? "Update Slide" : "Add Slide"}
            </button>
            {editingSlide && (
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-600 text-white py-2 px-4 rounded-lg"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {/* List of slides */}
        <div>
          <p className="my-2 bg-gray-700 p-2 font-bold text-white text-center text-lg">Max 4 Slides you can add.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {slides.map((slide) => (
            <div
              key={slide._id}
              className="border border-gray-200 rounded-lg p-4 shadow-md"
            >
              <img
              // src={`${process.env.REACT_APP_BASE_URL}/uploads/${slide.imageUrl}`} 
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{slide.title}</h3>
              <p className="text-sm text-gray-700">{slide.description}</p>
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => handleEdit(slide)}
                  className="bg-yellow-500 text-white py-1 px-2 rounded-lg"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(slide._id)}
                  className="bg-red-600 text-white py-1 px-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminSliderPage;
