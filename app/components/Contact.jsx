'use client';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, phone, message } = formData;

    // Validate required fields
    if (!fullName || !email || !phone || !message) {
      setError('All fields are required.');
      return;
    }

    // Reset error state
    setError('');

    // Send email using EmailJS
    emailjs
      .send(
        'service_r0ex0cl', // Replace with your service ID
        'template_4vtfjk5', // Replace with your template ID
        {
          to_email: 'support@amazonlegacypress.com',
          from_name: fullName,
          from_email: email,
          phone,
          message,
        },
        'TihDoLxcsdR_sDnwT' // Replace with your EmailJS user ID
      )
      .then(() => {
        alert('Your message has been sent successfully!');
        setFormData({ fullName: '', email: '', phone: '', message: '' }); // Reset form fields
      })
      .catch((err) => {
        setError('Failed to send your message. Please try again later.');
        console.error('EmailJS Error:', err);
      });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-5xl font-oswald text-center mb-16 text-orange-500">
          REACH OUT TO US
        </h2>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
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

          {error && <p className="text-red-500 text-sm italic">{error}</p>}
          <p className='text-center'><span className='text-orange-500'>Disclaimer:</span> By providing a telephone number and submitting the form you are consenting to be contacted by SMS text message. Message and data rates may apply. Reply STOP to opt out of further messaging from us. Visit our <a href='/privacypolicy' className='text-orange-500 underline'>Privacy Policy Page</a> for further knowledge.</p>
          <p className='text-center'><span className='text-orange-500'>Note:</span> Please be patient after pressing the Send Message button</p>
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
