import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/hugowebs.jpg';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleClick = () => setNav(!nav);

  return (
    <div className={`fixed w-full h-[80px] flex justify-between items-center px-6 transition-all duration-300 z-50 ${
      scrolled 
        ? 'bg-[#0a192f]/80 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className='flex items-center'>
        <img 
          src={Logo} 
          alt='Logo' 
          className='w-12 h-12 rounded-full border-2 border-pink-500/50 hover:border-pink-500 transition-colors duration-300' 
        />
      </div>

      {/* Menu */}
      <ul className='hidden md:flex items-center space-x-1'>
        {['home', 'about', 'skills', 'work', 'testimonials', 'portfolio', 'services', 'faq', 'newsletter', 'contact'].map((item) => (
          <li key={item}>
            <Link
              to={item}
              smooth={true}
              duration={500}
              className='px-4 py-2 text-sm font-medium text-gray-300 hover:text-white relative group'
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div 
        onClick={handleClick} 
        className='md:hidden z-10 cursor-pointer p-2 hover:bg-[#1a2a3a]/50 rounded-lg transition-colors duration-300'
      >
        {!nav ? <FaBars className='w-6 h-6' /> : <FaTimes className='w-6 h-6' />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#0a192f]/95 backdrop-blur-md transition-transform duration-300 ease-in-out ${
          nav ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col items-center justify-center h-full'>
          <ul className='space-y-8'>
            {['home', 'about', 'skills', 'work', 'testimonials', 'portfolio', 'services', 'faq', 'newsletter', 'contact'].map((item) => (
              <li key={item} className='text-center'>
                <Link
                  onClick={handleClick}
                  to={item}
                  smooth={true}
                  duration={500}
                  className='text-2xl font-medium text-gray-300 hover:text-white relative group'
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
