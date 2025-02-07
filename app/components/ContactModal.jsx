"use client";
import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      const { name, email, phone, message } = formData;
  
      if (!name || !email || !phone || !message) {
        alert("All fields are required!");
        setIsSubmitting(false);
        return;
      }
  
      emailjs
        .send(
          "service_r0ex0cl", 
          "template_4vtfjk5",
          {
            to_email: 'support@amazonlegacypress.com',
            from_name: name,
            from_email: email,
            phone,
            message,
          },
          "TihDoLxcsdR_sDnwT"
        )
        .then(() => {
          alert("Your message was sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
          setIsSubmitting(false);
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send the message. Please try again later.");
          setIsSubmitting(false);
        });
    };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-customYellow border-b-4 border-orange-800 rounded-lg shadow-lg w-full max-w-xl p-8 relative">
        <button
          className="absolute top-5 right-5 p-1 px-3 shadow-xl shadow-black bg-orange-700 text-white  rounded-full hover:text-black duration-300"
          onClick={onClose}
        >
          ✖
        </button>
        {/* Close Button */}

        

        {/* Form */}
        <div className="text-black ">
            <div className="border-2 border-black border-dotted p-4">
                <h2 className="text-4xl text-left font-bold mb-4">
                <span className="text-orange-900">|</span> Request A Free Call
                </h2>
                <p className=" text-left mb-6">
                    Fill out the form below and we’ll get back to you shortly.
                </p>
          </div>
          <form className=" text-black pt-4 space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col md:space-x-4 space-y-4 md:space-y-0 md:flex-row">
                <input
                type="text"
                id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                placeholder="Your Name"
                className="md:w-[50%] w-full p-3  bg-customField rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
                <input
                type="email"
                id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                placeholder="Your Email"
                className="md:w-[50%] w-full p-3  bg-customField rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
            </div>
            <input
              type="tel"
              id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              placeholder="Your Phone"
              className="w-full p-3  rounded bg-customField focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter a brief description about your book"
              className="w-full p-3  rounded bg-customField focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows="3"
              required
            ></textarea>
            
            <p>
                <span className="text-orange-900">Note:</span> By submitting this form, you agree to our <a href="/privacypolicy" className="underline text-orange-900">Privacy Policy.</a>
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white py-2 px-4 rounded hover:bg-white hover:text-black duration-300"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;