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
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>/ Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${project.img})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center bg-pink-600 bg-opacity-70 rounded-md p-4'>
                <span className='text-2xl font-bold text-white tracking-wider text-center'>
                  {project.title}
                </span>
                <div className='pt-8 text-center'>
                  <a href={project.demoLink}>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-700 hover:text-white transition-colors duration-300'>
                      Demo
                    </button>
                  </a>
                  <a href={project.codeLink}>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-700 hover:text-white transition-colors duration-300'>
                      Code
                    </button>
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
