import React from 'react';
import { FaCode, FaPaintBrush, FaSearch, FaMobileAlt, FaServer } from 'react-icons/fa';
import { SiWix } from 'react-icons/si'; // Importing the Wix icon from react-icons

const services = [
  {
    name: "Web Development",
    description: "Building responsive and high-quality web applications.",
    icon: <FaCode className='w-12 h-12 mb-4' />
  },
  {
    name: "UI/UX Design",
    description: "Designing user-friendly interfaces and experiences.",
    icon: <FaPaintBrush className='w-12 h-12 mb-4' />
  },
  {
    name: "SEO Optimization",
    description: "Improving the visibility of your website on search engines.",
    icon: <FaSearch className='w-12 h-12 mb-4' />
  },
  {
    name: "Power Apps",
    description: "Developing custom business applications using Microsoft Power Apps.",
    icon: <FaMobileAlt className='w-12 h-12 mb-4' />
  },
  {
    name: "Full Stack Web Applications",
    description: "Creating end-to-end web applications using the latest technologies.",
    icon: <FaServer className='w-12 h-12 mb-4' />
  },
  {
    name: "Wix Development",
    description: "Creating websites using the Wix platform.",
    icon: <SiWix className='w-12 h-12 mb-4' />
  }
];

const Services = () => {
  return (
    <div name='services' className='w-full bg-[#0a192f] text-gray-300 py-16'>
      <div className='max-w-[1000px] mx-auto px-4'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Services</p>
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-[#1a2a3a] p-6 rounded-lg shadow-lg hover:bg-pink-600 hover:scale-105 transition-transform duration-300 ease-in-out'
            >
              {service.icon}
              <h3 className='text-2xl font-bold mb-2'>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
