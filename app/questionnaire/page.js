"use client";

import Header from '../components/Header';
import Image from 'next/image';
import Contact from '../components/Contact';
import QuoteBar from '../components/QuoteBar';
import Footer from '../components/Footer';
import Portfolio from '@/app/components/Portfolio';
import HomeAbout from '@/app/components/HomeAbout';
import { FaCheck } from 'react-icons/fa';

export default function page() {

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
                Book Project Questionnaire
                </h2>
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

        <HomeAbout/>
        <QuoteBar />
        <Footer />
      </main>
    </>
  );
}