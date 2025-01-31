"use client";

import Header from '../components/Header';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import Footer from '../components/Footer';
import QuoteBar from '../components/QuoteBar';

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
          <div className="flex-col justify-center mx-auto px-4 py-20 relative z-20 h-full flex items-center">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
              <div className="text-white mt-16 md:mt-0">
                <h2 className="font-oswald text-2xl text-center md:text-4xl mb-4 text-orange-500 uppercase font-medium tracking-wider">
                Amazon Legacy Press
                </h2>
                <p className="text-sm text-center text-gray-600 md:text-lg mb-8">
                Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                Your Privacy, Our Commitment
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Amazon Legacy Press takes your privacy seriously. We are dedicated to protecting your personal data and using it responsibly. Our Consumer Data Policy ensures transparency and fosters trust, so you can engage with our services confidently.
                </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                Data Collection
                </h2>
                <p className="text-gray-700 leading-relaxed">
                We collect only the information necessary to deliver our services, such as your name, contact details, and project-related information.
                </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                Data Usage
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Your data is used exclusively to provide services, communicate updates, and enhance your experience. We do not share your information without your consent.
                </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Our systems are protected with industry-standard security measures. Regular audits ensure your information is safeguarded against unauthorized access.
                </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                Your Rights
                </h2>
                <p className="text-gray-700 leading-relaxed">
                You have the right to access, update, or request deletion of your data. Contact us to exercise your rights or address any concerns.
                </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                Transparency
                </h2>
                <p className="text-gray-700 leading-relaxed">
                We believe in open communication. Updates to this policy will be shared promptly, and we encourage you to review them periodically.
                </p>
              </div>

            </div>
          </div>
        </section>
        <QuoteBar/>
        <Footer/>
        
      </main>
    </>
  );
}