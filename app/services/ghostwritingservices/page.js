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
                  Ghostwriting Services
                </h2>
                <p className="text-sm text-center text-gray-600 md:text-lg mb-8">
                Bringing hidden stories to life through the skilled artistry of ghostwriting.
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
                Ghostwriting Services
                Infuse your creative ideas with life
                </h2>
                <p className="text-gray-700 leading-relaxed">
                We transform your imaginative concepts into compelling stories with ease. Our skilled team of writers, experienced in various genres, works closely with you to capture the essence of your vision. Whether you're a new writer or a seasoned author seeking a fresh perspective, our ghostwriting services are tailored to match your unique voice and style. Passionate about the art of storytelling, we ensure each page resonates with authenticity and captivates your readers from start to finish.
                </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                Absolute Confidentiality
                Your Story, Your Privacy, Our Commitment
                </h2>
                <p className="text-gray-700 leading-relaxed">
                At Amazon Legacy Press Experts, we understand that trust is crucial in the creative process. Our Ghostwriting Services are built on a foundation of unwavering confidentiality. We ensure that your story, ideas, and personal information are kept secure and private. We value the trust you place in us and are committed to handling your narrative with the utmost discretion, allowing you to share your story with complete peace of mind.
                </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                Mastering Collaborative Storytelling
                Crafting Narratives Together
                </h2>
                <p className="text-gray-700 leading-relaxed">
                At Amazon Legacy Press Experts, collaboration is the heartbeat of our ghostwriting process. We are committed to creating stories that resonate with your unique voice. Our writers work closely with you to fine-tune every plot twist, character development, and narrative detail to align with your vision. More than just writing a book, we strive to create an engaging experience that draws readers into your world. By choosing us, you transform your story into a collaborative masterpiece, reflecting the true essence of partnership in storytelling.
                </p>
              </div>

              {/* Right Column - Image */}
              <div className="relative aspect-[3/4] max-h-[600px] w-full flex justify-center">
                <div className="relative h-full w-[70%]">
                  <Image
                    src="/3.jpg"
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
                <h2 className="font-oswald max-w-xl text-4xl md:text-5xl text-white font-bold leading-tight mb-8">
                Unlocking Our Potential
                Elevating for Greater Impact
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
                    src="/home-book.jpg"
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
                  Creative Excellence
            From Manuscript to Bestseller.
                  </h2>
                  <p className="text-gray-700 text-2xl mb-8">
                  At Amazon Legacy Press Experts, we specialize in turning your ideas into literary triumphs. Our Ghostwriting Services accompany you through every stage of the process, from the first draft to reaching bestseller acclaim. Our dedicated team ensures that your story captivates and connects with readers worldwide. With meticulous attention to detail and a deep passion for storytelling, we transform your concepts into lasting literary achievements.
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