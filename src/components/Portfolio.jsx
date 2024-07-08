// src/components/Portfolio.js

import React from 'react';

const projects = [
  {
    name: "Project One",
    description: "Description of project one.",
    image: "path_to_image",
    link: "https://example.com"
  },
  {
    name: "Project Two",
    description: "Description of project two.",
    image: "path_to_image",
    link: "https://example.com"
  },
  // Add more projects
];

const Portfolio = () => {
  return (
    <div name='portfolio' className='w-full bg-[#0a192f] text-gray-300 py-16'>
      <div className='max-w-[1000px] mx-auto px-4'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Portfolio</p>
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div key={index} className='bg-[#1a2a3a] p-6 rounded-lg shadow-lg'>
              <img src={project.image} alt={project.name} className='w-full h-64 object-cover rounded-md' />
              <h3 className='text-2xl font-bold mt-4'>{project.name}</h3>
              <p className='mt-2'>{project.description}</p>
              <a href={project.link} target='_blank' rel='noopener noreferrer' className='text-pink-600 hover:underline mt-4 block'>
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
