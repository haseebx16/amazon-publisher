"use client";

import Header from '../components/Header';
import { useState } from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import Contact from '../components/Contact';
import QuoteBar from '../components/QuoteBar';
import Footer from '../components/Footer';
import HomeAbout from '../components/HomeAbout';
import emailjs from 'emailjs-com';

export default function page() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
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
    }

  const services = [
    'Book Publishing Services',
    'Book Writing Services',
    'Book Marketing Services'
  ];

  return (
    <>
      <Header />
      <main className="relative w-full overflow-x-hidden">
        <section className="relative h-screen">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/hero-books.jpg')`,
          }}
        ></div>
      </div>

          {/* Content */}
          <div className="container mx-auto px-4 py-20 relative z-20 h-full flex items-center">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Text Content */}
              <div className="text-white mt-16 md:mt-0 max-w-2xl">
                <h2 className="font-oswald text-lg md:text-xl mb-4 text-orange-500 uppercase font-medium tracking-wider">
                  WELCOME TO Amazon Legacy Press EXPERTS
                </h2>
                <h1 className="font-oswald text-2xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide">
                  NAVIGATING DIGITAL PUBLISHING CHALLENGES WITH A RELIABLE ALLY
                </h1>
                <p className="text-sm md:text-lg mb-8">At Amazon Legacy Press Experts, we stand by you every step of the way, offering an extensive range of services to bring your publishing goals to life. Founded on a powerful yet simple mission, we aim to empower both authors and publishers as they navigate the ever-evolving world of publishing.</p>
                <button className="btn-primary text-lg uppercase tracking-wider">
                  DISCOVER MORE
                </button>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-800/80 p-8  rounded-lg w-full max-w-md">
                <h3 className="font-oswald text-2xl text-white font-bold mb-6 text-center">Let's Get Started</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="form-input"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="4"
                    className="form-input"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <button
                    type="submit"
                    className="btn-primary w-full uppercase tracking-wider"
                  >
                    SEND MESSAGE
                  </button>
                </form>
            <p className='text-center mt-4 text-white'><span className='text-orange-500'>Disclaimer: </span> By providing a telephone number and submitting the form you are consenting to be contacted by SMS text message. Message and data rates may apply. Reply STOP to opt out of further messaging. Visit Our <a href='/privacypolicy' className='text-orange-500 underline'>Privacy Policy Page</a> for further knowledge.</p>
              </div>

            </div>
          </div>
        </section>

        <WhyChooseUs />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Book Image with Black Bar */}
              <div className="relative aspect-[3/4] max-h-[600px] w-full">
                <div className="relative h-full w-[90%]">
                  <Image
                    src="/about.jpg"
                    alt="Tom Clancy's Enemy Contact Book Cover"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="absolute top-0 right-0 w-[2%] h-[40%] hidden md:block bg-black rounded-full"></div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-oswald text-orange-500 mb-6">
                    Guiding Authors Through the Publishing
                    Landscape with Proven Marketing Excellence.
                  </h2>
                  <p className="text-gray-700 mb-8">
                    Amazon Legacy Press Experts specializes in book marketing and is a reliable partner for authors seeking both writing and promotional support. Our all-encompassing services cover editing, proofreading, cover design, reviews, and platform building.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 mb-8">
                    Unlock the full potential of your book by partnering with us. Our agency 
                    is equipped with a team of seasoned professionals who specialize in 
                    refining and enhancing your creative vision, no matter the genre. We 
                    excel in marketing strategies that connect your book with major literary 
                    forums across the globe, significantly boosting its chances of success.
                  </p>
                </div>

                <div>
                  <ul className="space-y-4">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <FaCheck className="text-orange-500 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
                <HomeAbout/>
                <Contact/>
                <QuoteBar/>
                <Footer/>
      </main>
    </>
  );
}