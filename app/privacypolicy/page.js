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
                <h2 className="text-5xl font-oswald text-gray-800 mb-6">
                    Privacy Policy: Collection Of Numbers And Use
                </h2>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                1. Collection of Phone Numbers
                </h2>
                <p className="text-gray-700 leading-relaxed">
                We collect phone numbers solely for the purposes of contact. This information is provided voluntarily by you with explicit consent at the time of collection.
                </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                2. Consent
                </h2>
                <p className="text-gray-700 leading-relaxed">
                By providing your phone number, you consent to its use strictly for the purposes stated above. Consent is obtained through the Contact Form, and you may withdraw consent at any time by contacting us at <span className='text-orange-500'>support@amazonlegacypress.com</span>.
                </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                3. Third-Party Sharing
                </h2>
                <p className="text-gray-700 leading-relaxed">
                We do not share, sell, or lease your phone number to third-party providers, marketers, or external organizations. Your phone number and associated consent details are retained securely and used exclusively for the purposes outlined in this policy.
                </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                Exceptions:
                </h2>
                <p className="text-gray-700 leading-relaxed">
                If required by law (e.g., legal subpoena, regulatory compliance).
                </p>
                <p className="text-gray-700 leading-relaxed">
                For service providers directly involved in delivering the services you requested (e.g., SMS gateway providers). These partners are contractually prohibited from using your data for unrelated purposes
                </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                4. Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Phone numbers are stored using industry-standard encryption and access controls. We retain this information only for as long as necessary to fulfill the stated purpose or as required by law.
                </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                5. Your Rights
                </h2>
                <p className="text-gray-700 leading-relaxed">
                You may request access to, correction of, or deletion of your phone number from our systems by contacting <span className='text-orange-500'>support@amazonlegacypress.com</span>.
                </p>
                <h2 className="text-4xl font-oswald text-gray-800 mb-6">
                Example For Direct Use
                </h2>
                <p className="text-gray-700 leading-relaxed">
                "We collect phone numbers solely to contact. Your phone number and consent will never be shared with third-party providers, advertisers, or external organizations unless explicitly required by law or to fulfill services you’ve requested (e.g., SMS delivery). All data is secured and retained only for as long as necessary. You may withdraw consent or request deletion at any time by contacting support@amazonlegacypress.com."
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