// src/components/Footer.js

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-[#0a192f] text-gray-300 py-8'>
      <div className='max-w-[1000px] mx-auto px-4 flex justify-between items-center'>
        <p>&copy; 2024 Hugo Alvarado. All rights reserved.</p>
        <div className='flex space-x-4'>
          <a href='https://www.linkedin.com/in/hugo-alvarado-189481b0/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className='hover:text-pink-600 transition duration-300' size={24} />
          </a>
          <a href='https://github.com/Rober2092' target='_blank' rel='noopener noreferrer'>
            <FaGithub className='hover:text-pink-600 transition duration-300' size={24} />
          </a>
          <a href='https://twitter.com/yourprofile' target='_blank' rel='noopener noreferrer'>
            <FaTwitter className='hover:text-pink-600 transition duration-300' size={24} />
          </a>
          <a href='https://www.instagram.com/yourprofile' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='hover:text-pink-600 transition duration-300' size={24} />
          </a>
          <a href='https://www.facebook.com/yourprofile' target='_blank' rel='noopener noreferrer'>
            <FaFacebook className='hover:text-pink-600 transition duration-300' size={24} />
          </a>
          <a href='https://www.youtube.com/yourprofile' target='_blank' rel='noopener noreferrer'>
            <FaYoutube className='hover:text-pink-600 transition duration-300' size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
