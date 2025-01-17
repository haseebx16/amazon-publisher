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
                Book Trailer Video

                </h2>
                <p className="text-sm max-w-6xl  text-center text-gray-600 md:text-lg mb-8">
                Spark intrigue and generate excitement with our Book Trailer Video—a visually stunning showcase that encapsulates the heart of your story.
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
                Captivate Your Audience with Dynamic Video Book Trailers
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Transform your book promotion with our innovative Video Book Trailer service. We turn your story into a compelling visual experience, capturing the essence of your narrative in an engaging and dynamic format. By blending artistic creativity with technical excellence, we bring your book's world to life, immersing viewers in the vivid and imaginative universe you've crafted.     </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                Mastering the Craft of Video Book Trailers                </h2>
                <p className="text-gray-700 leading-relaxed">
                At Amazon Legacy Press Experts, we specialize in creating visually stunning and emotionally resonant Video Book Trailers. Our team delves deeply into the core of your story, identifying key elements to captivate your audience. From initial concept to scriptwriting, we expertly employ cinematic techniques to craft a trailer that authentically represents and enhances your book’s narrative.
                </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                Instantly Captivating Your Audience
                </h2>
                <p className="text-gray-700 leading-relaxed">
                In a landscape where attention spans are fleeting, our Video Book Trailers are designed to captivate viewers instantly. By blending eye-catching visuals, engaging narration, and carefully chosen music, we create trailers that quickly pique interest and spark curiosity about your book. We aim to forge an immediate connection with your audience, leaving them eager to explore the full story within your book’s pages.
                </p>
              </div>

              {/* Right Column - Image */}
              <div className="relative aspect-[3/4] max-h-[600px] w-full flex justify-center">
                <div className="relative h-full w-[70%]">
                  <Image
                    src="/5.jpg"
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
                    src="/video.png"
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
                  Amplify Your Book's Reach with Strategic Promotion.
                  </h2>
                  <p className="text-gray-700 text-2xl mb-8">
                  At Amazon Legacy Press Experts, we view promotion as a creative craft, and our Video Book Trailers are essential elements in this artistry. More than just striking visuals, these trailers are strategically designed to boost your book’s visibility across digital channels. Leveraging social media, video platforms, and targeted marketing campaigns, we generate excitement and anticipation around your book. Discover how our Video Book Trailer service can elevate your promotional efforts and transform your book’s impact.
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