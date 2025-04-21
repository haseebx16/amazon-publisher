"use client";

import Header from '../components/Header';
import { useState } from 'react';
import Contact from '../components/Contact';
import QuoteBar from '../components/QuoteBar';
import Footer from '../components/Footer';

export default function page() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Log form submission (replace with your actual form submission logic)
      console.log('Form submitted:', formData);
      
      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
            backgroundImage: `url('/testimonials.jpeg')`,
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
                Are you an author ready to publish your book on Amazon, or a publisher aiming to refine your digital publishing strategy?
                </h1>
                <p className="text-sm md:text-lg mb-8">Reach out to us for a complimentary consultation, and together, we'll transform your literary ambitions into tangible success.</p>
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
                    placeholder="Full Name"
                    className="form-input"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <textarea
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
        <div className="flex flex-col mt-16 lg:flex-row items-center justify-center gap-12">
              {/* Text Content */}
              <div className="text-white mt-16 md:mt-0 max-w-4xl">
                <h2 className="font-oswald text-lg md:text-2xl text-center max-w-4xl mb-4 text-orange-500 uppercase font-medium tracking-wider">
                Are you an author ready to launch your book on Amazon, or a publisher looking to enhance your digital publishing approach? Contact us for a free consultation, and let’s bring your literary visions to life.
                </h2>
                <h1 className="font-oswald text-gray-500 text-md text-center md:text-xl lg:text-xl mb-6 tracking-wide">
                Dive into the realm of audiobook publishing and share your stories with a wider, enthusiastic audience. Discover the potential of audiobook creation and distribution with Amazon Legacy Press Experts and expand your reach today.
                </h1>
                <p className="text-sm text-center text-gray-500 md:text-lg">Email: support@amazonlegacypress.com</p>
                <p className="text-sm text-center text-gray-500 md:text-lg pb-12">Our Address: 1401 Lavaca St Austin, TX 78701</p>

                {/* <p className="text-sm text-center text-gray-500 md:text-lg">Address: 15500 VOSS RD SUITE 586, Sugar Land, TX 77498, United States</p> */}

                
              </div>
          </div>
                <Contact/>
                <QuoteBar/>
                <Footer/>
      </main>
    </>
  );
}