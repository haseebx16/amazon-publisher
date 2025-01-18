import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

export default function BookShowcase() {
  const services = [
    'Book Publishing Services',
    'Book Writing Services',
    'Book Marketing Services'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Book Image with Black Bar */}
          <div className="relative h-[800px] w-full flex items-center">
            <div className="relative h-full w-[90%]">
              <Image
                src="/book-cover.jpg"
                alt="Tom Clancy's Enemy Contact Book Cover"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="w-[2%] h-[40%] hidden md:block bg-black rounded-full self-start"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-oswald text-orange-500 mb-6">
                ELEVATE YOUR BOOKS AND AUTHOR PRESENCE WITH OUR EXPERTISE
              </h2>
              <p className="text-gray-700 mb-8">
                Amazon Legacy Press EXPERTS IS COMMITTED TO HELPING AUTHORS ACHIEVE MAXIMUM 
                RETURNS ON THEIR INVESTMENTS. AS A LEADING PROFESSIONAL BOOK PUBLISHING AND MARKETING 
                AGENCY, WE SPECIALIZE IN OPTIMIZING THE MOST EFFECTIVE MARKETING CHANNELS TO PROMOTE YOUR 
                BOOK. WHETHER THROUGH TRADITIONAL OR SELF-PUBLISHING ROUTES, OUR COMPREHENSIVE PROGRAM 
                IS DESIGNED TO PROPEL AUTHORS TO BESTSELLER STATUS AND SECURE PROMINENT PLACEMENTS IN 
                BOOKSTORES ACROSS THE GLOBE.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-oswald text-black font-bold mb-6">Dare to Dream Big!</h3>
              <p className="text-gray-700 mb-8">
                Unlock the full potential of your book by partnering with us. Our agency 
                is equipped with a team of seasoned professionals who specialize in 
                refining and enhancing your creative vision, no matter the genre. We 
                excel in marketing strategies that connect your book with major literary 
                forums across the globe, significantly boosting its chances of success.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-oswald text-black italic mb-6">Turning Your Dream into a Published Reality</h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <FaCheck className="text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-gray-700 mb-8">
                Looking for skilled writers to help shape your ideas into powerful 
                narratives? Our book-writing services transcend boundaries, offering 
                unmatched versatility across all genres. We collaborate with some of 
                the most creative minds, providing exceptional support to bring your 
                vision to fruition. With over ten years of experience in ghostwriting, 
                we've been dedicated to helping clients meet their writing aspirations. At 
                Amazon Legacy Press Experts, our mission is to deliver writing 
                assistance that leaves a lasting mark in the literary world.
              </p>
            </div>

           
          </div>
        </div>

        {/* Bottom Section with Columns */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl text-black font-oswald mb-8">
              Make Your Book Shine in Bookstores, Not Fade Away on a Shelf.
            </h2>
            <p className="text-gray-700 mb-8">
              For several years, we've been committed to partnering with authors, helping 
              them navigate the journey of publishing and promoting their books. As a leading 
              book publishing and marketing agency, our primary goal is to empower writers 
              throughout the entire process, from initial drafts to final promotions. Our team of 
              skilled professionals is dedicated to supporting authors every step of the way.
            </p>
            <p className="text-gray-700">
              We also offer comprehensive services, including editorial work, proofreading, 
              cover design, both print and digital formatting, and distribution through major 
              platforms like Kindle Direct Publishing (KDP).
            </p>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-3xl text-black font-oswald mb-6">Streamline Your Journey to Publishing Success.</h3>
            <h3 className="text-3xl text-black font-oswald mb-6">Publish, Print, and Prosper.</h3>
            <p className="text-gray-700 mb-8">
              We offer premium services, including Author Central, Book Promotion, and 
              Platform Building. Our goal is to elevate authors and their books by promoting 
              them across various channels, including social media, to boost visibility and 
              capture the attention your work deserves.
            </p>
            <h3 className="text-3xl text-black font-oswald mb-6">
              Ensure Your Book Stands Out in Bookstores, Not Forgotten on a Shelf.
            </h3>
            <p className="text-gray-700">
              For years, we have been committed to partnering with authors to support the 
              entire publishing journey, from manuscript development to marketing strategies 
              that ensure your book receives the attention it deserves in the competitive 
              literary marketplace.
            </p>
            <button className="bg-orange-500 mt-8 text-white px-8 py-4 font-oswald text-xl hover:bg-orange-600 transition-colors duration-300">
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
