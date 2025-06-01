import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';

const projects = [
  {
    title: 'E-commerce Back End',
    img: WorkImg,
    demoLink: '/',
    codeLink: 'https://github.com/Rober2092/E-commerce-Back-End',
  },
  {
    title: 'Cinema Ready App',
    img: realEstate,
    demoLink: 'https://rober2092.github.io/cinema-ready-app/',
    codeLink: 'https://github.com/Rober2092/cinema-ready-app',
  },
  {
    title: 'Notetaker',
    img: WorkImg,
    demoLink: 'https://notetaker-alvarado.herokuapp.com/',
    codeLink: 'https://github.com/Rober2092/note-taker',
  },
  {
    title: 'Weather Dashboard',
    img: realEstate,
    demoLink: 'https://rober2092.github.io/Server-Side-APIs-Weather-Dashboard/',
    codeLink: 'https://github.com/Rober2092/Server-Side-APIs-Weather-Dashboard',
  },
  {
    title: 'JavaScript Password Generator',
    img: WorkImg,
    demoLink: 'https://rober2092.github.io/javaScript-Password-Generator/',
    codeLink: 'https://github.com/Rober2092/javaScript-Password-Generator',
  },
  {
    title: 'Taskmaster Pro',
    img: realEstate,
    demoLink: 'https://rober2092.github.io/Taskmaster-pro/',
    codeLink: 'https://github.com/Rober2092/Taskmaster-pro',
  },
];

const Work = () => {
  return (
    <div name='work' className='w-full bg-gradient-to-b from-[#0a192f] to-[#0f2942] text-gray-300 py-24'>
      <div className='max-w-[1200px] mx-auto px-6'>
        <div className='flex flex-col items-center mb-16'>
          <h2 className='text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500'>
            Projects
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6'></div>
          <p className='text-xl text-gray-400 text-center max-w-2xl'>
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group relative overflow-hidden rounded-2xl bg-[#1a2a3a]/50 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 ease-in-out'
            >
              <div 
                className='absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110'
                style={{ backgroundImage: `url(${project.img})` }}
              />
              
              <div className='absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              
              <div className='relative z-10 p-6 flex flex-col h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <h3 className='text-2xl font-bold mb-4 text-white'>
                  {project.title}
                </h3>
                
                <div className='mt-auto flex gap-4'>
                  <a 
                    href={project.demoLink}
                    className='flex-1 text-center py-3 px-4 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity duration-300'
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.codeLink}
                    className='flex-1 text-center py-3 px-4 rounded-lg border border-pink-500/50 text-white font-medium hover:bg-pink-500/10 transition-colors duration-300'
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
