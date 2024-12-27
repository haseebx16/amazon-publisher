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
import Portfolio from '../components/Portfolio';

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

  const testimonials = [
    {
      id: 1,
      name: "JONATHAN HARRIS",
      text: "Amazon Classic Publishers Experts turned my dream into reality. Their careful attention to detail and unwavering support throughout the publishing process made all the difference. I couldn't have asked for a better team to bring my book to life."
    },
    {
      id: 2,
      name: "SOPHIA MARTINEZ",
      text: "Working with Amazon Classic Publishers Experts was a game-changer for me. Their expertise and dedication to crafting a successful publishing strategy were instrumental in my book's success. I highly recommend their services to any author."
    },
    {
      id: 3,
      name: "DAVID THOMPSON",
      text: "From the initial concept to the final product, Amazon Classic Publishers Experts provided exceptional guidance and support. Their professionalism and commitment to excellence ensured my book reached its full potential."
    },
    {
      id: 4,
      name: "EMMA WILSON",
      text: "The team at Amazon Classic Publishers Experts demonstrated unparalleled expertise in bringing my manuscript to life. Their attention to detail and commitment to quality exceeded my expectations at every turn."
    },
    {
      id: 5,
      name: "MICHAEL CHEN",
      text: "I'm thoroughly impressed with the professional service provided by Amazon Classic Publishers Experts. Their strategic approach to publishing and marketing has helped my book reach audiences I never thought possible."
    },
    {
      id: 6,
      name: "SARAH ANDERSON",
      text: "Choosing Amazon Classic Publishers Experts was the best decision for my publishing journey. Their comprehensive approach and dedication to author success truly sets them apart in the industry."
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
              src="/testimonials.jpg"
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
                Welcome to Amazon Classic Publishers
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