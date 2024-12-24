'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-5xl font-oswald text-center mb-16 text-orange-500">
          REACH OUT TO US
        </h2>

        <form 
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-4 bg-white rounded font-oswald text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 bg-white rounded font-oswald text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-4 bg-white rounded font-oswald text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="6"
              className="w-full p-4 bg-white rounded font-oswald text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-500 text-white px-12 py-4 font-oswald text-xl hover:bg-orange-600 transition-colors duration-300 uppercase"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
