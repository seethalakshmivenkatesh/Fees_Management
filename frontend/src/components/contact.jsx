import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add backend API integration here later
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] flex flex-col items-center pt-28 pb-16 px-6 md:px-20">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-4 text-center">
        Contact <span className="text-[#0288D1]">FeeHive</span>
      </h1>
      <p className="text-gray-700 text-lg text-center max-w-2xl mb-12">
        Have questions about fees, admissions, or account access? Our team is
        here to help you with any inquiries or technical support.
      </p>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-between">
          <h2 className="text-2xl font-semibold text-[#0D1B2A] mb-6">
            Get in Touch
          </h2>
          <div className="space-y-5 text-gray-700">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#0288D1] text-2xl" />
              <p>FeeHive HQ, Sunrise University Campus, Chennai, India</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#0288D1] text-2xl" />
              <p>+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#0288D1] text-2xl" />
              <p>support@feehive.edu.in</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-[#0D1B2A] mb-2">
              Follow Us
            </h3>
            <div className="flex gap-4 text-[#0288D1] text-2xl">
              <a href="#" className="hover:text-[#4FC3F7]">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-[#4FC3F7]">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-[#4FC3F7]">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-[#0D1B2A] mb-6">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0288D1]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0288D1]"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0288D1]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0288D1]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#0288D1] hover:bg-[#01579B] text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full max-w-6xl mt-16">
        <h2 className="text-2xl font-semibold text-[#0D1B2A] mb-4 text-center">
          Locate Us
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="FeeHive Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.478084598182!2d80.2400!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265f222c8a7c3%3A0x4e3f0b35ed8a6f9!2sChennai%20University!5e0!3m2!1sen!2sin!4v1687865432109!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
