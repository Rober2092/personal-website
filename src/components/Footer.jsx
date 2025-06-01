// src/components/Footer.js

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-b from-[#0a192f] to-[#0f2942] text-gray-300 py-12 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-50"></div>
      
      {/* Content */}
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Copyright */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Hugo Alvarado
            </h3>
            <p className="text-gray-400">&copy; 2025 All rights reserved.</p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <a 
              href='https://www.linkedin.com/in/hugo-alvarado-189481b0/' 
              target='_blank' 
              rel='noopener noreferrer'
              className="transform hover:scale-110 transition-all duration-300 hover:text-pink-500"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href='https://github.com/Rober2092' 
              target='_blank' 
              rel='noopener noreferrer'
              className="transform hover:scale-110 transition-all duration-300 hover:text-pink-500"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href='https://twitter.com/yourprofile' 
              target='_blank' 
              rel='noopener noreferrer'
              className="transform hover:scale-110 transition-all duration-300 hover:text-pink-500"
            >
              <FaTwitter size={24} />
            </a>
            <a 
              href='https://www.instagram.com/yourprofile' 
              target='_blank' 
              rel='noopener noreferrer'
              className="transform hover:scale-110 transition-all duration-300 hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href='https://www.facebook.com/yourprofile' 
              target='_blank' 
              rel='noopener noreferrer'
              className="transform hover:scale-110 transition-all duration-300 hover:text-pink-500"
            >
              <FaFacebook size={24} />
            </a>
            <a 
              href='https://www.youtube.com/yourprofile' 
              target='_blank' 
              rel='noopener noreferrer'
              className="transform hover:scale-110 transition-all duration-300 hover:text-pink-500"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-gray-700/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-sm text-gray-500">
              Built with ❤️ using React and Tailwind CSS
            </p>
            <div className="flex gap-6 text-sm">
              <a 
                href="/terms" 
                className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a 
                href="/privacy" 
                className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
