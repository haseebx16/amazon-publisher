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
import ContactModal from '../components/ContactModal';
import WhyAuthorsChoose from './WhyAuthorsChoose';
import CouponAbout from './CouponAbout';
import Process from './Process';
import PricingPlans from './PricingPlans';

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

  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Header />
      <main className="relative w-full overflow-x-hidden">
        <section className="relative h-screen">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/banner_bg.png')`,
          }}
        ></div>
      </div>

          {/* Content */}
          <div className="container mx-auto px-8 py-20 relative z-20 h-screen flex items-center">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Text Content */}
              <div className="text-white mt-16 md:mt-0 max-w-2xl">
                <h2 className="font-oswald text-lg md:text-xl mb-4 text-orange-500 uppercase font-medium tracking-wider">
                  WELCOME TO Amazon Legacy Press EXPERTS
                </h2>
                <h1 className="font-oswald text-2xl md:text-5xl lg:text-6xl uppercase font-bold mb-6 tracking-wide">
                  your one-step solution for everything about books
                </h1>
                <p className="text-sm md:text-lg mb-8">At Amazon Legacy Press Experts, we stand by you every step of the way, offering an extensive range of services to bring your publishing goals to life. Founded on a powerful yet simple mission, we aim to empower both authors and publishers as they navigate the ever-evolving world of publishing.</p>
                <div className='space-x-2'>
                  <button onClick={openModal} className="btn-primary px-2 text-lg  tracking-wider">
                  &#8594; Start Project 
                  </button>
                  
                </div>
                <ContactModal isOpen={isModalOpen} onClose={closeModal} />  
              </div>

              {/* Contact Form */}
              <div className="bg-customYellow p-2 rounded-lg w-full max-w-sm">
              <h3 className="font-oswald text-3xl text-black font-bold md:mb-2 text-center border-2 border-dotted border-black p-4">
                <strong>50% Discount</strong><br/>
                <span className='text-[18px]'>On First Order</span>
              </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="form-input form-input-bg"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="form-input form-input-bg"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="form-input form-input-bg"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="4"
                    className="form-input form-input-bg"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <button
                    type="submit"
                    className="btn-primary bg-black text-white w-full uppercase tracking-wider"
                  >
                    SEND MESSAGE
                  </button>
                </form>
            <p className='text-center hidden md:block mt-4 text-black'><span className='text-orange-900'>Disclaimer: </span> By providing a telephone number and submitting the form you are consenting to be contacted by SMS text message. Message and data rates may apply. Reply STOP to opt out of further messaging. Visit Our <a href='/privacypolicy' className='text-orange-900 underline'>Privacy Policy Page</a> for further knowledge.</p>
              </div>

            </div>
          </div>
        </section>
          <WhyAuthorsChoose/>
        <WhyChooseUs />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Book Image with Black Bar */}
              <div className="relative aspect-[3/4] max-h-[600px] w-full">
                <div className="relative h-full w-[90%]">
                  <Image
                    src="/image-21.png"
                    alt="Tom Clancy's Enemy Contact Book Cover"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                {/* <div className="absolute top-0 right-0 w-[2%] h-[40%] hidden md:block bg-black rounded-full"></div> */}
              </div>

              {/* Right Column - Content */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-4xl md:text-5xl font-oswald text-orange-500 mb-6">
                    What Sets Us Apart?
                  </h2>
                  <p className="text-gray-700">
                  What sets us apart is our unwavering commitment to excellence and personalized service. We prioritize your success and go the extra mile to ensure your satisfaction.
                  </p>
                </div>

                <div className='flex flex-col'>
                  <p className="text-gray-700 mb-1">
                    &#x2022; Personalized attention to your needs.
                  </p>
                  <p className="text-gray-700 mb-1">
                    &#x2022; Expert guidance at every step.
                  </p>
                  <p className="text-gray-700 mb-1">
                    &#x2022; Quality that stands out.
                  </p>
                  <p className="text-gray-700 mb-1">
                    &#x2022; Timely support when you need it.
                  </p>
                  <p className="text-gray-700 mb-1">
                    &#x2022; Innovative marketing strategies tailored to your ebook.
                  </p>
                  <p className="text-gray-700 mb-1">
                    &#x2022; Transparent communication throughout the process.
                  </p>
                  <p className="text-gray-700 mb-1">
                    &#x2022; Continuous dedication to improvement.
                  </p>
                </div>
                <div className='space-x-2'>
                  <button onClick={openModal} className="btn-primary px-2 text-lg  tracking-wider">
                  &#8594; Start Project 
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <Process/>
                <CouponAbout/>
        <PricingPlans/>
                <QuoteBar/>
                <Footer/>
      </main>
    </>
  );
}