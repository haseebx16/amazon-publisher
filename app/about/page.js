"use client";

import Header from '../components/Header';
import { useState } from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import Contact from '../components/Contact';
import QuoteBar from '../components/QuoteBar';
import Footer from '../components/Footer';

export default function About() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'Book Publishing Services',
    'Book Writing Services',
    'Book Marketing Services'
  ];

  return (
    <>
      <Header />
      <section className="relative min-h-screen pt-20">
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
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="text-white max-w-2xl">
            <h2 className="font-oswald text-lg md:text-xl mb-4 text-orange-500 uppercase font-medium tracking-wider">
            WELCOME TO Amazon Classic Publishers EXPERTS
            </h2>
            <h1 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide">
            NAVIGATING DIGITAL PUBLISHING CHALLENGES WITH A RELIABLE ALLY
            </h1>
            <p className="text-lg mb-8">At Amazon Classic Publishers Experts, we stand by you every step of the way, offering an extensive range of services to bring your publishing goals to life. Founded on a powerful yet simple mission, we aim to empower both authors and publishers as they navigate the ever-evolving world of publishing.</p>
            <button className="btn-primary text-lg uppercase tracking-wider">
              DISCOVER MORE
            </button>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/80 p-8 rounded-lg w-full max-w-md">
            <h3 className="font-oswald text-2xl text-white font-bold mb-6 text-center">Let's Get Started</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="form-input"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="form-input"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="form-input"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="form-input"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
              <button
                type="submit"
                className="btn-primary w-full uppercase tracking-wider"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <WhyChooseUs/>
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Book Image with Black Bar */}
          <div className="relative h-[800px] w-full flex items-center">
            <div className="relative h-full w-[90%]">
              <Image
                src="/book-cover.jpg"
                alt="Tom Clancy's Enemy Contact Book Cover"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="w-[2%] h-[40%] hidden md:block bg-black rounded-full self-start"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-oswald text-orange-500 mb-6">
              Guiding Authors Through the Publishing
              Landscape with Proven Marketing Excellence.
              </h2>
              <p className="text-gray-700 mb-8">
              Amazon Classic Publishers Experts specializes in book marketing and is a reliable partner for authors seeking both writing and promotional support. Our all-encompassing services cover editing, proofreading, cover design, reviews, and platform building.
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
    <About/>
    {/* <Contact/>
    <QuoteBar/>
    <Footer/> */}
    </>
  );
}