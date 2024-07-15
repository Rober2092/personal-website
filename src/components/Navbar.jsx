import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '50px' }} />
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        {['home', 'about', 'skills', 'work', 'testimonials', 'portfolio', 'services', 'faq', 'newsletter', 'contact'].map((item) => (
          <li key={item} className='mx-4'>
            <Link
              to={item}
              smooth={true}
              duration={500}
              className='hover:text-pink-600 transition duration-300'
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        {['home', 'about', 'skills', 'work', 'testimonials', 'portfolio', 'services', 'faq', 'newsletter', 'contact'].map((item) => (
          <li key={item} className='py-6 text-4xl'>
            <Link
              onClick={handleClick}
              to={item}
              smooth={true}
              duration={500}
              className='hover:text-pink-600 transition duration-300'
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          {[
            {
              href: 'https://www.linkedin.com/in/hugo-alvarado-189481b0/',
              label: 'LinkedIn',
              icon: <FaLinkedin size={30} />,
              bg: 'bg-blue-600',
            },
            {
              href: 'https://github.com/Rober2092',
              label: 'Github',
              icon: <FaGithub size={30} />,
              bg: 'bg-[#333333]',
            },
            {
              href: 'mailto:rober2091@icloud.com',
              label: 'Email',
              icon: <HiOutlineMail size={30} />,
              bg: 'bg-[#6fc2b0]',
            },
            {
              href: 'https://www.dropbox.com/s/4g1rfdveaftk8yr/HugoAlvaradoResume.pdf?dl=0',
              label: 'Resume',
              icon: <BsFillPersonLinesFill size={30} />,
              bg: 'bg-[#565f69]',
            },
          ].map(({ href, label, icon, bg }) => (
            <li
              key={label}
              className={`${bg} w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300`}
            >
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href={href}
                target='_blank'
                rel='noopener noreferrer'
              >
                {label} {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Social Icons */}
      {/* Remove this section to hide social icons on mobile */}
    </div>
  );
};

export default Navbar;
