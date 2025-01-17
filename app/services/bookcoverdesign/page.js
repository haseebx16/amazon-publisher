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
                Book Cover Design
                </h2>
                <p className="text-sm max-w-6xl  text-center text-gray-600 md:text-lg mb-8">
                A book cover serves as the initial introduction between the reader and the narrative, providing a glimpse into the story and generating excitement for the journey ahead.
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
                The Artistry of Book Cover Design
                </h2>
                <p className="text-gray-700 leading-relaxed">
                In the ever-evolving landscape of book marketing, a one-size-fits-all approach simply doesn’t suffice. At Amazon Legacy Press Experts, we reject generic strategies in favour of crafting personalized marketing plans that capture the unique essence of your book. By pinpointing the most effective promotion channels—whether through a dynamic online presence, targeted advertising, or creative promotional events—we customize our approach to ensure your book stands out in a competitive market.
                </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                Striking Visuals
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Discover the power of precision with Amazon Legacy Press Experts. Our focused marketing strategies are expertly designed to deliver impactful results. Effectively engage your target audience and see tangible outcomes through our results-driven book marketing campaigns. Let your book stand out in the most relevant and influential spaces.
                </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                Design Styles and Choices
                </h2>
                <p className="text-gray-700 leading-relaxed">
                At the core of every story is the author and our marketing strategy is built around this fundamental truth. We recognize the dedication and passion you've invested in your work. Our author-focused approach transcends mere book sales; it's about highlighting your unique narrative. From developing your brand to creating a community around your writing, we are committed to celebrating and amplifying your literary journey to the world.
                </p>
              </div>

              {/* Right Column - Image */}
              <div className="relative aspect-[3/4] max-h-[600px] w-full flex justify-center">
                <div className="relative h-full w-[70%]">
                  <Image
                    src="/book-cover-1.jpg"
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
                    src="/book-cover (1).jpg"
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
                  Strategies for Global Distribution .
                  </h2>
                  <p className="text-gray-700 text-2xl mb-8">
                  At Amazon Legacy Press Experts, our book marketing services extend beyond borders, aiming to elevate your book to international prominence. By leveraging Amazon's extensive global network and partnering with international retailers, we ensure your literary work reaches readers worldwide. Expand your readership on a global scale and let your story resonate across various cultures with our meticulously crafted global distribution strategies.
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