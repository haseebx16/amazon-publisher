"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="max-w-[1400px] mx-auto px-2 py-4">
        <div className="flex items-center">
          {/* Logo - Left */}
          <div className="w-1/4">
            <Link href="/" className="font-oswald text-2xl font-bold text-orange-500">
              <span className="flex items-center">
                <span className="text-3xl">Amazon</span>
                <span className="text-black ml-1">classic publishers</span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button 
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex justify-center w-2/4">
            <div className="flex space-x-6">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/about" className="nav-link">
                About Us
              </Link>
              <Link href="/services" className="nav-link">
                Services
              </Link>
              <Link href="/testimonials" className="nav-link">
                Testimonials
              </Link>
              <Link href="/portfolio" className="nav-link">
                Portfolio
              </Link>
              <Link href="/contact" className="nav-link">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Phone Number - Right */}
          <div className="hidden md:flex w-1/4 justify-end">
            <a href="tel:+17136780086" className="font-oswald text-orange-500 font-bold whitespace-nowrap">
              +1 713 678 0086
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-white shadow-md`}>
          <div className="flex flex-col p-4 space-y-4">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About Us
            </Link>
            <Link href="/services" className="nav-link">
              Services
            </Link>
            <Link href="/testimonials" className="nav-link">
              Testimonials
            </Link>
            <Link href="/portfolio" className="nav-link">
              Portfolio
            </Link>
            <Link href="/contact" className="nav-link">
              Contact Us
            </Link>
            <a href="tel:+17136780086" className="font-oswald text-orange-500 font-bold">
              +1 713 678 0086
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
