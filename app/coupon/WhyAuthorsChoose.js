"use client";

import React, { useState, useEffect } from 'react';

const WhyAuthorsChoose = () => {
  const words = ['Publishing', 'Editing', 'Writing'];
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

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
    <section className="p-4 md:p-16 flex bg-gray-100 flex-col justify-center items-center">
      <div className="w-full max-w-6xl">
        <h1 className="md:text-5xl mt-12 md:mt-0 text-3xl text-center font-bold">
          Why Authors Choose us For 
          <span className="text-customYellow inline-block px-6 border-2 border-customYellow rounded-full ml-2">
            {currentWord}<span className="animate-pulse">|</span>
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mt-8 md:mt-16">
        {[
          {
            img: '/boko.png',
            title: 'Expert Guidance',
            desc: "Benefit from our experienced team's guidance and support throughout journey."
          },
          {
            img: '/book2.png',
            title: 'Tailored Services',
            desc: 'Enjoy personalized services tailored to meet your unique needs, preferences and requirements.'
          },
          {
            img: '/book3.png',
            title: 'Extensive Reach',
            desc: 'Tap into our vast distribution networks to reach a wide audience of readers worldwide.'
          },
          {
            img: '/book4.png',
            title: 'Excellence',
            desc: 'Tap into our vast distribution networks to reach a wide audience of readers worldwide.'
          }
        ].map((card, index) => (
          <div key={index} className="bg-customYellow rounded-md shadow-xl text-black shadow-orange-500 hover:bg-black duration-500 hover:text-white p-4 flex flex-col items-center h-full">
            <img src={card.img} alt={card.title}  />
            <p className="mt-2 text-2xl md:text-3xl text-center font-bold">{card.title}</p>
            <p className="mt-2 text-md text-center">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyAuthorsChoose;