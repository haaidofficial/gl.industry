import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegAddressCard } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", mobile: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/contact`, formData);
      setSuccessMessage(response.data.message);
      setFormData({ name: "", email: "", message: "", mobile: "" });
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Failed to send the message. Please try again.");
      console.error(error);
    }
  };

useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    

  return (
    <>
      {/* <div className='w-full h-[50vh] backgroundImage mb-2'>
        <div className='w-full h-[100%] flex justify-end items-center flex-col overlayOtherPage'> */}
          {/* <h1 className='text-[7vmax] font-bold text-white text-justify textShadow mb-0'>For more<span className='text-red-900'>  Enquery</span></h1> */}
        {/* </div>
      </div> */}

      <div className="my-4 in-h-[60vh] xl:py-2 md:py-4 sm:py-4 py-4 text-[#21a17b] flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto p-4 pt-0 lg:p-10">
          {/* Header */}
          <div className="text-center xl:mb-12 md:mb-8 sm:mb-4 mb-4">
            <h1 className="xl:text-4xl md:text-4xl sm:text-2xl text-2xl font-bold  italic font-serif">For More Enquiry Contact Us</h1>
            
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section */}
            <div className="flex-1 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-400 p-3 rounded-full">

                  <FaRegAddressCard className="text-[1.5rem] text-white" />

                </div>
                <div>
                  <h2 className="font-bold text-lg">Address</h2>
                  <p>G.L Industries, H-4, Sector D-1, Tronica City,
                    Ghaziabad-210103</p>
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
                  <p>glrs.smiley@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Right Section: Contact Form */}
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
                  type="number"
                  name="mobile"
                  placeholder="Mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-red-400"
                  required
                />
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
      {/* <div className="w-full h-fit my-4">
        <div className="w-[95%] h-[60vh] mx-auto">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19781.578525748144!2d77.25078313197416!3d28.781583710497387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cff15cad3ae2d%3A0xa6d5925ef63a9ca4!2sTrans%20Delhi%20Signature%20City%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201102!5e0!3m2!1sen!2sin!4v1735220599361!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Tronica Ghaziabad"></iframe>
        </div>
      </div> */}

    </>

  );
};

export default Contact;
