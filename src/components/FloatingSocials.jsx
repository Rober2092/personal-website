import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const socials = [
  {
    href: 'https://www.linkedin.com/in/hugo-alvarado-189481b0/',
    label: 'LinkedIn',
    icon: <FaLinkedin size={22} />, // slightly smaller for circular buttons
    bg: 'bg-blue-600',
  },
  {
    href: 'https://github.com/Rober2092',
    label: 'Github',
    icon: <FaGithub size={22} />, 
    bg: 'bg-[#333333]',
  },
  {
    href: 'mailto:rober2091@icloud.com',
    label: 'Email',
    icon: <HiOutlineMail size={22} />, 
    bg: 'bg-[#6fc2b0]',
  },
  {
    href: 'https://www.dropbox.com/s/4g1rfdveaftk8yr/HugoAlvaradoResume.pdf?dl=0',
    label: 'Resume',
    icon: <BsFillPersonLinesFill size={22} />, 
    bg: 'bg-[#565f69]',
  },
];

const FloatingSocials = () => {
  return (
    <div className="fixed z-50 bottom-28 right-4 flex flex-col gap-4 items-end md:bottom-32 md:right-8">
      {socials.map(({ href, label, icon, bg }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl ${bg} bg-opacity-80 backdrop-blur-md hover:bg-opacity-100 transition-all duration-300 hover:scale-110 focus:scale-105 outline-none`}
          aria-label={label}
          tabIndex={0}
        >
          <span className="text-white group-hover:text-pink-400 transition-colors duration-300">
            {icon}
          </span>
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-1 rounded-lg bg-[#222b] text-xs text-white opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap shadow-lg">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default FloatingSocials; 