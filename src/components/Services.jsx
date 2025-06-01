import React from 'react';
import { FaCode, FaPaintBrush, FaSearch, FaMobileAlt, FaServer } from 'react-icons/fa';
import { SiWix } from 'react-icons/si'; // Importing the Wix icon from react-icons

const services = [
  {
    name: "Web Development",
    description: "Building responsive and high-quality web applications using modern technologies and best practices.",
    icon: <FaCode className='w-12 h-12 text-pink-500' />
  },
  {
    name: "UI/UX Design",
    description: "Creating intuitive and engaging user interfaces with a focus on exceptional user experiences.",
    icon: <FaPaintBrush className='w-12 h-12 text-pink-500' />
  },
  {
    name: "SEO Optimization",
    description: "Enhancing your online presence through strategic search engine optimization techniques.",
    icon: <FaSearch className='w-12 h-12 text-pink-500' />
  },
  {
    name: "Power Apps",
    description: "Developing custom business applications using Microsoft Power Apps to streamline operations.",
    icon: <FaMobileAlt className='w-12 h-12 text-pink-500' />
  },
  {
    name: "Full Stack Development",
    description: "Building end-to-end web applications with modern frameworks and cloud technologies.",
    icon: <FaServer className='w-12 h-12 text-pink-500' />
  },
  {
    name: "Wix Development",
    description: "Creating professional websites using the Wix platform with custom functionality.",
    icon: <SiWix className='w-12 h-12 text-pink-500' />
  }
];

const Services = () => {
  return (
    <div name='services' className='w-full bg-gradient-to-b from-[#0a192f] to-[#0f2942] text-gray-300 py-24'>
      <div className='max-w-[1200px] mx-auto px-6'>
        <div className='flex flex-col items-center mb-16'>
          <h2 className='text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500'>
            Services
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6'></div>
          <p className='text-xl text-gray-400 text-center max-w-2xl'>
            Comprehensive solutions to help bring your digital vision to life
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='group relative bg-[#1a2a3a]/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 ease-in-out'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300'></div>
              
              <div className='relative z-10'>
                <div className='flex justify-center mb-6'>
                  <div className='p-4 rounded-xl bg-gray-800/50 group-hover:bg-gray-800/80 transition-colors duration-300'>
                    {service.icon}
                  </div>
                </div>
                
                <h3 className='text-2xl font-bold mb-4 text-center group-hover:text-pink-500 transition-colors duration-300'>
                  {service.name}
                </h3>
                
                <p className='text-gray-400 text-center leading-relaxed'>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
