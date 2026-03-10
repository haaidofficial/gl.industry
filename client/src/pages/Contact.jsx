import React, { useEffect, useState } from "react"; 
import axios from "axios";
import { FaRegAddressCard } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      let mobileValue = value.replace(/\D/g, ""); // Remove non-numeric characters
      if (mobileValue.length > 10) mobileValue = mobileValue.slice(0, 10);
      
      setFormData({ ...formData, mobile: mobileValue });
      setError(mobileValue.length === 10 ? "" : "Mobile number must be exactly 10 digits.");
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.mobile.length !== 10) {
      setError("Mobile number must be exactly 10 digits.");
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/contact`, formData);
      setSuccessMessage(response.data.message);
      setFormData({ name: "", email: "", mobile: "", message: "" });
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Failed to send the message. Please try again.");
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="my-4 min-h-[60vh] xl:py-2 md:py-4 sm:py-4 py-4 text-[#21a17b] flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto p-4 pt-0 lg:p-10">
          <div className="text-center xl:mb-12 md:mb-8 sm:mb-4 mb-4">
            <h1 className="xl:text-4xl md:text-4xl sm:text-2xl text-2xl font-bold italic font-serif">
              For More Enquiry Contact Us
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-400 p-3 rounded-full">
                  <FaRegAddressCard className="text-[1.5rem] text-white" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">Address</h2>
                  <p>GL EXPORTS, A-46, Sector-64, NOIDA-Up, Pin-201301</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-400 p-3 rounded-full">
                  <FaPhoneFlip className="text-[1.5rem] text-white" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">Phone</h2>
                  <p>+91-8383977648</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-400 p-3 rounded-full">
                  <SiMinutemailer className="text-[1.5rem] text-white" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">Email</h2>
                  <p>himanshig.smiley@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-[#21a17b] p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-white">Send Message</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-red-400"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-red-400"
                  required
                />
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-red-400"
                  required
                />
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <textarea
                  name="message"
                  placeholder="Type your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-red-400"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-red-400 rounded-lg text-white font-bold hover:bg-red-600 transition"
                >
                  SEND
                </button>
                {successMessage && <p className="text-green-400 mt-4">{successMessage}</p>}
                {errorMessage && <p className="text-red-400 mt-4">{errorMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit my-4">
         <div className="w-[95%] h-[60vh] mx-auto">		   
 		<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3496.723626031357!2d77.28847887550651!3d28.78750227558049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQ3JzE1LjAiTiA3N8KwMTcnMjcuOCJF!5e0!3m2!1sen!2sin!4v1740807981357!5m2!1sen!2sin"  width="100%" height="100%" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Tronica Ghaziabad"></iframe>
         </div>
      </div> 
    </>
  );
};

export default Contact;
