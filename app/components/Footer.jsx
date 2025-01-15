'use client';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const exploreLinks = [
    { name: 'Book Writing Services', href: 'bookwritingservices' },
    { name: 'Ghost Book Writing', href: 'ghostwritingservices' },
    { name: 'Book Editing & Proofreading', href: 'bookeditingandproofreadingservices' },
    { name: 'Book Cover Design', href: 'bookcoverdesign' },
    { name: 'Book Illustrations', href: 'bookillustration' },
    { name: 'Book Marketing', href: 'bookmarketing' },
  ];

  const quickLinks = [
    { name: 'About Us', href: 'about' },
    { name: 'Contact Us', href: 'contact' },
    { name: 'Portfolio', href: 'portfolio' },
    { name: 'Testimonials', href: 'testimonials' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
  ];

  return (
    <footer className="bg-[#1e2124] text-white pt-48">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-4 py-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <img src='/footer.png' style={{ width: "200px", height: "60px" }}/>
            </Link>
            
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="text-xl font-oswald mb-6">EXPLORE</h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={`/services/${link.href}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-oswald mb-6">CONTACT</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-oswald mb-6">CONTACT</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  15500 VOSS RD SUITE 586, Sugar Land, TX 77498, United States
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-orange-500 flex-shrink-0" />
                <Link 
                  href="tel:+17136780086"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +1 713 678 0086
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500 flex-shrink-0" />
                <Link 
                  href="mailto:info@amazonclassicpublishers.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@amazonclassicpublishers.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 py-6">
          <div className="text-center space-y-4">
            <p className="text-gray-400">Amazon Legacy Press | &copy; Copyright 2024</p>
            <p className="text-gray-500 text-sm max-w-4xl mx-auto">
              <span className="font-semibold">Disclaimer:</span> Amazon Legacy Press operates as a standalone entity, entirely separate from Amazon.com, offering support to independent authors in their publishing and marketing endeavors. We adhere to ethical business standards and comply with all applicable U.S. Federal and State regulations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
