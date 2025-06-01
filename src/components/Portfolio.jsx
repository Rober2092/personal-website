// src/components/Portfolio.js

import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const projects = [
  {
    name: "Project One",
    description: "Description of project one.",
    icon: <FaReact className='w-12 h-12 mb-4 text-pink-500' />,
    link: "https://example.com"
  },
  {
    name: "Project Two",
    description: "Description of project two.",
    icon: <FaNodeJs className='w-12 h-12 mb-4 text-pink-500' />,
    link: "https://example.com"
  },
  {
    name: "Project Three",
    description: "Description of project three.",
    icon: <FaDatabase className='w-12 h-12 mb-4 text-pink-500' />,
    link: "https://example.com"
  },
  // Add more projects with appropriate icons
];

const Portfolio = () => {
  return (
    <div name='portfolio' className='w-full bg-gradient-to-b from-[#0a192f] to-[#0f2942] text-gray-300 py-24'>
      <div className='max-w-[1200px] mx-auto px-6'>
        <div className='flex flex-col items-center mb-16'>
          <h2 className='text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500'>
            Portfolio
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full'></div>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className='group relative bg-[#1a2a3a]/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 ease-in-out'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300'></div>
              
              <div className='relative z-10'>
                <div className='flex justify-center mb-6'>
                  <div className='p-4 rounded-xl bg-gray-800/50 group-hover:bg-gray-800/80 transition-colors duration-300'>
                    {project.icon}
                  </div>
                </div>
                
                <h3 className='text-2xl font-bold mb-3 text-center group-hover:text-pink-500 transition-colors duration-300'>
                  {project.name}
                </h3>
                
                <p className='text-gray-400 text-center mb-6'>
                  {project.description}
                </p>
                
                <a 
                  href={project.link} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='block text-center py-3 px-6 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity duration-300'
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
