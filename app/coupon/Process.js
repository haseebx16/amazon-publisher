"use client";

import React, { useState, useEffect } from 'react';
import ContactModal from '../components/ContactModal';

const Process = () => {
  const words = ['Work'];
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = wordIndex % words.length;
      const targetWord = words[currentIndex];

      if (!isDeleting) {
        if (currentWord.length < targetWord.length) {
          setCurrentWord(targetWord.slice(0, currentWord.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (currentWord.length > 0) {
          setCurrentWord(targetWord.slice(0, currentWord.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex(currentIndex + 1);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, wordIndex]);

  return (
    <section className="p-4 md:p-16 flex damascus-pattern flex-col justify-center items-center">
      <div className="w-full flex flex-col items-center max-w-6xl">
        <h1 className="md:text-5xl text-white mt-12 md:mt-0 text-3xl text-center font-bold">
          How Does The Process 
          <span className="text-customYellow inline-block px-6 border-2 border-customYellow rounded-full ml-2">
            {currentWord}<span className="animate-pulse">|</span>
          </span>
        </h1>
        <p className='text-gray-300 mt-2 text-center max-w-md'>Understanding our process is simple and straightforward. We guide you through each step, ensuring clarity and transparency at every stage of your publishing journey.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mt-8 md:mt-16">
        {[
          {
            img: '/small_icon2.png',
            title: 'Consultation',
            desc: "We begin with an in-depth consultation to understand your goals, preferences, and vision for your book."
          },
          {
            img: '/small_icon3.png',
            title: 'Development',
            desc: 'Our team collaborates with you to develop your manuscript, cover design, and marketing strategy tailored to your needs.'
          },
          {
            img: '/small_icon4.png',
            title: 'Production',
            desc: 'Once approved, we proceed with production, including editing, formatting, and finalizing your book for publication.'
          },
          {
            img: '/small_icon5.png',
            title: 'Distribution',
            desc: 'With your book ready, we assist in distributing it across various channels, maximizing its reach and visibility to your target audience.'
          }
        ].map((card, index) => (
          <div key={index} className="bg-transparent border-2 border-customYellow shadow-xl text-white shadow-orange-500 hover:bg-black duration-500 hover:text-white p-4 flex flex-col items-center h-full">
            <img src={card.img} alt={card.title} className='h-16 ' />
            <p className="mt-2 text-2xl md:text-3xl text-center font-bold">{card.title}</p>
            <p className="mt-2 text-md text-center">{card.desc}</p>
          </div>
        ))}
                <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
        <div className='space-x-2 flex mt-12 justify-center items-center'>
                  <button onClick={openModal} className="btn-primary px-2 text-lg  tracking-wider">
                  &#8594; Start Project 
                  </button>
                  
                </div>
    </section>
  );
};

export default Process;