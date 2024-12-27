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
                We bring your books to life with expert publishing services
                </h2>
                <h1 className="font-oswald text-2xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide">
                Begin Your Visual Journey: Unveil Your Story Today
                </h1>
                <p className="text-sm md:text-lg mb-8">Ready to see your story come alive on screen? Amazon Classic Publishers Experts invites you to start an exciting visual journey with our Video Book Trailer service. Captivate your audience, enhance your book's exposure, and elevate your storytelling to new heights. Let your narrative leap off the pages and into the vibrant realm of video. Take the first step now and witness the magic of transforming your book into a dynamic visual experience.</p>
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

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="relative">
              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-orange-500 text-white p-4 rounded-full hover:bg-orange-600 transition-colors z-20 hidden md:block"
                aria-label="Previous testimonials"
              >
                <FaChevronLeft />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-orange-500 text-white p-4 rounded-full hover:bg-orange-600 transition-colors z-20 hidden md:block"
                aria-label="Next testimonials"
              >
                <FaChevronRight />
              </button>

              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full flex-shrink-0">
                    {testimonials.slice(0, 3).map((testimonial) => (
                      <div 
                        key={testimonial.id}
                        className="bg-white rounded-lg shadow-xl p-8 relative"
                      >
                        {/* Quote Mark */}
                        <div className="absolute -top-4 right-8">
                          <span className="text-6xl text-orange-500">"</span>
                        </div>

                        <div className="flex flex-col h-full">
                          <div className="flex-grow">
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                              {testimonial.text}
                            </p>
                          </div>
                          
                          <div>
                            <h3 className="font-oswald text-xl text-gray-900 tracking-wider">
                              {testimonial.name}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full flex-shrink-0">
                    {testimonials.slice(3, 6).map((testimonial) => (
                      <div 
                        key={testimonial.id}
                        className="bg-white rounded-lg shadow-xl p-8 relative"
                      >
                        {/* Quote Mark */}
                        <div className="absolute -top-4 right-8">
                          <span className="text-6xl text-orange-500">"</span>
                        </div>

                        <div className="flex flex-col h-full">
                          <div className="flex-grow">
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                              {testimonial.text}
                            </p>
                          </div>
                          
                          <div>
                            <h3 className="font-oswald text-xl text-gray-900 tracking-wider">
                              {testimonial.name}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Dots */}
              <div className="flex justify-center mt-8 gap-2 md:hidden">
                {[...Array(2)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial group ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

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
                <HomeAbout/>
                <Contact/>
                <QuoteBar/>
                <Footer/>
      </main>
    </>
  );
}