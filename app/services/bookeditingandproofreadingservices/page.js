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
                Refine Your Manuscript to Perfection with Our Expert Editing
                </h2>
                <p className="text-sm text-center text-gray-600 md:text-lg mb-8">
                Transform your manuscript into a polished, standout book with our specialized editing and proofreading services.
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
                The Art of Precision Editing
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Editing goes beyond mere grammar checks; it’s about elevating your manuscript into a literary masterpiece. Our skilled editors meticulously refine your work, addressing inconsistencies, enhancing flow, and ensuring a compelling narrative. They pay close attention to every detail, from character development to plot coherence. With a keen eye for language and a passion for storytelling, our editors unlock the full potential of your story.
                </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                Tailored Editing and Proofreading Solutions
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Discover the ideal solution for your book with our range of editing and proofreading packages, tailored to fit your specific needs and budget. Whether you require a thorough structural edit, a final proofread, or something in between, our packages offer the flexibility to meet your preferences. For unique projects, we also provide custom packages. Explore our offerings to find the perfect match for your manuscript.
                </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                Mastering the Art of Editing for Literary Excellence
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Editing is akin to refining a rough diamond to reveal its brilliance, and at Amazon Legacy Press Experts, our approach is a meticulous craft. We start with a thorough structural edit, carefully aligning your book's plot, character development, and pacing. Following that, our line editing enhances your prose for a smooth and engaging flow. Finally, our proofreading specialists meticulously review every page, correcting errors to ensure your book is impeccably prepared for publication. We are committed to preserving your unique voice while elevating your work to shine brightly. Our dedication to literary excellence is steadfast, and we work closely with you, providing insightful feedback and recommendations to unlock your book's full potential. Your success is our priority, and together, we'll create a literary masterpiece that captivates readers and stands out in the publishing arena.
                </p>
              </div>

              {/* Right Column - Image */}
              <div className="relative aspect-[3/4] max-h-[600px] w-full flex justify-center">
                <div className="relative h-full w-[70%]">
                  <Image
                    src="/booknia_b.jpg"
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
                <h2 className="font-oswald max-w-3xl text-4xl md:text-5xl text-white font-bold leading-tight mb-8">
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
                    src="/book-editing.jpeg"
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
                  Impeccable and Captivating Content.
                  </h2>
                  <p className="text-gray-700 text-2xl mb-8">
                  We recognize that readers have high standards, and even minor errors can interrupt the flow of your narrative. Our team of proofreading experts meticulously reviews your manuscript, correcting typos, grammatical mistakes, and formatting issues. Our goal is to present your work with flawless precision, allowing readers to fully engage with your story without any interruptions.
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