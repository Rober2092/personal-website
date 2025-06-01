// src/components/BackToTop.js

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className='fixed bottom-10 right-10 p-4 rounded-2xl bg-[#1a2a3a]/50 backdrop-blur-md border border-gray-700/50 text-white transition-all duration-300 ease-in-out group'
          style={{
            transform: `translateY(${isHovered ? '-5px' : '0'})`,
            boxShadow: isHovered 
              ? '0 10px 30px -10px rgba(236, 72, 153, 0.3)' 
              : '0 4px 20px -5px rgba(0, 0, 0, 0.2)'
          }}
        >
          <div className='relative'>
            <div className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            <div className='relative flex items-center justify-center'>
              <FaArrowUp className='w-6 h-6 transform transition-transform duration-300 group-hover:-translate-y-1' />
            </div>
          </div>
          <span className='absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#1a2a3a] text-sm text-gray-300 px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>
            Back to Top
          </span>
        </button>
      )}
    </>
  );
};

export default BackToTop;
