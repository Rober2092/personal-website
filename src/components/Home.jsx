import React, { useRef } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaCode } from 'react-icons/fa';

const Home = () => {
  const workRef = useRef(null);

  const scrollToWork = () => {
    workRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div name='home' className='w-full min-h-screen bg-gradient-to-b from-[#0a192f] to-[#0f2942] relative'>
      {/* Background gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-50'></div>
      
      <div className='max-w-[1200px] mx-auto px-6 flex flex-col justify-center min-h-screen relative z-10'>
        <div className='space-y-8'>
          {/* Name and Title */}
          <div className='space-y-4'>
            <p className='text-pink-500 font-medium tracking-wider'>Welcome, I'm</p>
            <h1 className='text-5xl sm:text-7xl font-bold'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500'>
                Hugo Alvarado
              </span>
              <FaCode className='inline-block ml-4 text-pink-500 transform hover:rotate-12 transition-transform duration-300' />
            </h1>
            <h2 className='text-3xl sm:text-5xl font-bold text-gray-400'>
              Full Stack Developer
            </h2>
          </div>

          {/* Description */}
          <div className='max-w-[700px] space-y-6'>
            <p className='text-lg text-gray-300 leading-relaxed'>
              I'm a full-stack web developer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I'm focused on
              building responsive full-stack web applications.
            </p>
            <div className='bg-[#1a2a3a]/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50'>
              <p className='text-gray-300 leading-relaxed'>
                With 10 years of experience in healthcare as a perinatal technician at UCLA Health System, 
                I've always had a passion for technology. In 2021, I began my journey into web development 
                by making minor edits to a small business website. What started as simple HTML and CSS 
                changes quickly evolved into a deep love for programming and software development.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <button
              onClick={scrollToWork}
              className='group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-xl hover:opacity-90 transition-opacity duration-300'
            >
              View My Work
              <span className='group-hover:translate-x-1 transition-transform duration-300'>
                <HiArrowNarrowRight className='w-5 h-5' />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Work Section Reference */}
      <div ref={workRef} className='w-full h-screen' id="work"></div>
    </div>
  );
};

export default Home;
