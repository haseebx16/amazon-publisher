"use client";

import Header from '../../components/Header';
import WhyChooseUs from '../../components/WhyChooseUs';
import Image from 'next/image';
import Contact from '../../components/Contact';
import QuoteBar from '../../components/QuoteBar';
import Footer from '../../components/Footer';
import Portfolio from '@/app/components/Portfolio';
import HomeAbout from '@/app/components/HomeAbout';
import { FaCheck } from 'react-icons/fa';

export default function BookWritingServices() {

    const services = [
        'Book Publishing Services',
        'Book Writing Services',
        'Book Marketing Services'
      ];

  return (
    <>
      <Header />
      <main className="relative w-full bg-orange-50 overflow-x-hidden">
        <section className="relative">
          {/* Content */}
          <div className="flex-col justify-center mx-auto px-4 py-20 relative z-20 h-full flex items-center">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
              {/* Text Content */}
              <div className="text-white mt-16 md:mt-0">
                <h2 className="font-oswald text-2xl text-center md:text-4xl mb-4 text-orange-500 uppercase font-medium tracking-wider">
                Book Publishing
                </h2>
                <p className="text-sm max-w-6xl  text-center text-gray-600 md:text-lg mb-8">
                Delve into the dynamic world of book publishing with us, where we infuse energy into stories that truly connect with readers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Defines Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                Mastering the Craft of Storytelling
                </h2>
                <p className="text-gray-700 leading-relaxed">
                We breathe life into your ideas, seamlessly transforming them into compelling narratives. Our team of skilled writers, well-versed in various genres, works collaboratively with you to capture the essence of your vision. Whether you're a first-time author or an established writer seeking a fresh perspective, our ghostwriting services are tailored to suit your unique voice and style. We take pride in the art of storytelling, ensuring that every page resonates with authenticity and captivates your readers from start to finish.
                </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                Essence-Driven Book Cover Design
Mastering the Art of Captivating Visuals
                </h2>
                <p className="text-gray-700 leading-relaxed">
                In the realm of publishing, a book's cover is its first impression. Our Book Cover Design service focuses on capturing the essence of your story with professional craftsmanship. Our skilled designers collaborate with you to reflect the true spirit of your narrative, crafting a visually compelling cover that resonates with current market trends and reader expectations. We ensure your book's cover serves as an irresistible gateway, enticing readers to delve into the engaging world inside.
                </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                Elevate and Spotlight Your Literary Masterpiece
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Creating an outstanding book is just the beginning; effective promotion is the next vital step. Our Marketing Magic service is designed to create buzz around your literary work. We craft targeted social media campaigns and strategically planned book launches, tailoring our marketing efforts to match your unique voice and audience. Watch as your book gains traction and transforms into a must-read in literary communities.
                </p>
              </div>

              {/* Right Column - Image */}
              <div className="relative aspect-[3/4] max-h-[600px] w-full flex justify-center">
                <div className="relative h-full w-[70%]">
                  <Image
                    src="/4.jpg"
                    alt="Book Writing Services"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Storytelling Section */}
        <section className="bg-gray-900 py-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                #ffffff,
                #ffffff 2px,
                transparent 2px,
                transparent 12px
              )`
            }}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-3/4">
                <h2 className="font-oswald uppercase max-w-3xl text-4xl md:text-5xl text-white font-bold leading-tight mb-8">
                Our Book Writing service is your portal to weaving captivating narratives that captivate readers
and leave a lasting impact.
                </h2>
              </div>
              <div className="lg:w-1/4 flex justify-center">
                <a 
                  href="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center whitespace-nowrap"
                >
                  REQUEST A QUOTE
                </a>
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
                    src="/03.jpg"
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
                  Journeys of Achievement
Authors' Path to Success.
                  </h2>
                  <p className="text-gray-700 text-2xl mb-8">
                  Discover the inspiring stories of authors who have achieved success with Amazon Legacy Press Experts. This section showcases the real-life journeys of writers who turned their dreams into published triumphs with our support. Dive into the challenges they overcame, the strategies they used, and the successes that defined their publishing adventures. Your own story could become a beacon of inspiration for other authors striving for literary excellence.
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
        <Portfolio/>
        <HomeAbout/>
        <Contact />
        <QuoteBar />
        <Footer />
      </main>
    </>
  );
}