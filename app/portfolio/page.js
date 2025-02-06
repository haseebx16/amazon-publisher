"use client";

import Header from '../components/Header';
import { useState, useEffect } from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import Contact from '../components/Contact';
import QuoteBar from '../components/QuoteBar';
import Footer from '../components/Footer';
import HomeAbout from '../components/HomeAbout';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import BookShowcase from '../components/BookShowcase';
import emailjs from 'emailjs-com';
import Portfolio from '../components/Portfolio';

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

  const testimonials = [
    {
      id: 1,
      name: "JONATHAN HARRIS",
      text: "Amazon Legacy Press Experts turned my dream into reality. Their careful attention to detail and unwavering support throughout the publishing process made all the difference. I couldn't have asked for a better team to bring my book to life."
    },
    {
      id: 2,
      name: "SOPHIA MARTINEZ",
      text: "Working with Amazon Legacy Press Experts was a game-changer for me. Their expertise and dedication to crafting a successful publishing strategy were instrumental in my book's success. I highly recommend their services to any author."
    },
    {
      id: 3,
      name: "DAVID THOMPSON",
      text: "From the initial concept to the final product, Amazon Legacy Press Experts provided exceptional guidance and support. Their professionalism and commitment to excellence ensured my book reached its full potential."
    },
    {
      id: 4,
      name: "EMMA WILSON",
      text: "The team at Amazon Legacy Press Experts demonstrated unparalleled expertise in bringing my manuscript to life. Their attention to detail and commitment to quality exceeded my expectations at every turn."
    },
    {
      id: 5,
      name: "MICHAEL CHEN",
      text: "I'm thoroughly impressed with the professional service provided by Amazon Legacy Press Experts. Their strategic approach to publishing and marketing has helped my book reach audiences I never thought possible."
    },
    {
      id: 6,
      name: "SARAH ANDERSON",
      text: "Choosing Amazon Legacy Press Experts was the best decision for my publishing journey. Their comprehensive approach and dedication to author success truly sets them apart in the industry."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const totalSlides = Math.ceil(testimonials.length / 3);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  return (
    <>
      <Header />
      <main className="relative w-full overflow-x-hidden">
        <section className="relative h-screen">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black bg-opacity-80 z-10"></div>
            <Image
              src="/testimonials.jpeg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
              className="z-0 h-full w-full"
            />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 py-20 relative z-20 h-full flex items-center">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Text Content */}
              <div className="text-white max-w-2xl">
                <h2 className="font-oswald mt-20 text-lg md:text-xl mb-4 text-orange-500 uppercase font-medium tracking-wider">
                Welcome to Amazon Legacy Press
                </h2>
                <h1 className="font-oswald text-2xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide">
                IT'S TIME TO BRING THAT MANUSCRIPT TO LIFE. COMPLETE PUBLISHING SOLUTIONS
                </h1>
                <p className="text-sm md:text-lg mb-8">Unlock the full potential of your manuscript with our all-encompassing publishing services, designed to cater to the distinct needs of both authors and publishers. From the first review to the final distribution, we guide you through a smooth process, ensuring your work receives the attention and acclaim it truly merits.</p>
                <button className="btn-primary text-lg uppercase tracking-wider">
                  DISCOVER MORE
                </button>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-800/80 p-8 hidden md:block rounded-lg w-full max-w-md">
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
        <Portfolio/>
       <BookShowcase/>

       
                <HomeAbout/>
                <Contact/>
                <QuoteBar/>
                <Footer/>
      </main>
    </>
  );
}