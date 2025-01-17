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
                Trusted Professionals Delivering Premium Book Printing Solutions

                </h2>
                <p className="text-sm max-w-6xl  text-center text-gray-600 md:text-lg mb-8">
                We elevate the craft of book printing, transforming your written work into a physical masterpiece. Our commitment to quality shines through in every detail— from the pages to the cover and binding— ensuring your vision is flawlessly realized with expert precision and meticulous attention.
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
                Perfecting the Craft of Printing
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Unveiling the captivating beauty within each meticulously crafted book. We go beyond the conventional, adding a touch of enchantment to every book we print. Our experienced team pays close attention to every detail, ensuring that elements like color precision and texture enhance the visual and tactile appeal of your work. Whether you are publishing a novel, memoir, or educational text, we treat each project with the utmost care. Using state-of-the-art printing technology, we transform your words into a tangible experience that captivates readers and elevates the joy of holding a beautifully printed book.                </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                Precision in Every Page                </h2>
                <p className="text-gray-700 leading-relaxed">
                Advance your book printing journey with our innovative and streamlined solutions. From manuscript to finished product, our cutting-edge system ensures a smooth and hassle-free experience. With a few simple steps, you can select your preferences, upload your files, and see your book take shape in print. Our intuitive platform makes the printing process effortless, freeing you to focus on what you do best—creating compelling stories.
                </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                Defining Excellence
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Quality isn't merely an objective; it's our core principle. At Amazon Legacy Press Experts, we stand out for our rigorous quality assurance. Our advanced printing facilities ensure each book meets top-tier standards for color accuracy, clarity, and durability. From the first page to the last, your readers will experience the superior quality that sets your book apart on every shelf.
                </p>
              </div>

              {/* Right Column - Image */}
              <div className="relative aspect-[3/4] max-h-[600px] w-full flex justify-center">
                <div className="relative h-full w-[70%]">
                  <Image
                    src="/book-printing-1.jpg"
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
                    src="/book-printing-main.jpg"
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
                  Collaborative Creation Process .
                  </h2>
                  <p className="text-gray-700 text-2xl mb-8">
                  Elevate your storytelling with the Book Illustration services from Amazon Legacy Press Experts. Our skilled artists and illustrators are passionate about turning your words into visually compelling narratives. Whether you are crafting a children's book, writing fiction, or presenting non-fiction, our team is dedicated to enhancing your story with immersive illustrations, enriching the reader's journey and making your tales come alive.
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