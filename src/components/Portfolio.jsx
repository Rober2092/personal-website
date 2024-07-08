// src/components/Portfolio.js

import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'; // Import the icons you want to use

const projects = [
  {
    name: "Project One",
    description: "Description of project one.",
    icon: <FaReact className='w-12 h-12 mb-4 text-pink-600' />,
    link: "https://example.com"
  },
  {
    name: "Project Two",
    description: "Description of project two.",
    icon: <FaNodeJs className='w-12 h-12 mb-4 text-pink-600' />,
    link: "https://example.com"
  },
  {
    name: "Project Three",
    description: "Description of project three.",
    icon: <FaDatabase className='w-12 h-12 mb-4 text-pink-600' />,
    link: "https://example.com"
  },
  // Add more projects with appropriate icons
];

const Portfolio = () => {
  return (
    <div name='portfolio' className='w-full bg-[#0a192f] text-gray-300 py-16'>
      <div className='max-w-[1000px] mx-auto px-4'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Portfolio</p>
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div key={index} className='bg-[#1a2a3a] p-6 rounded-lg shadow-lg hover:bg-pink-600 hover:scale-105 transition-transform duration-300 ease-in-out'>
              <div className='flex justify-center'>
                {project.icon}
              </div>
              <h3 className='text-2xl font-bold mt-4'>{project.name}</h3>
              <p className='mt-2'>{project.description}</p>
              <a href={project.link} target='_blank' rel='noopener noreferrer' className='text-white hover:underline mt-4 block'>
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
