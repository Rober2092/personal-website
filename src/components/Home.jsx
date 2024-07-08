import React, { useRef, useEffect, useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  const workRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const scrollToWork = () => {
    workRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Home Section */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className={`text-pink-600 ${visible ? 'fade-in' : ''}`}>Hugo Alvarado</p>
        <h1 className={`text-4xl sm:text-7xl font-bold text-[#ccd6f6] ${visible ? 'fade-in' : ''}`}>
          Hugo Alvarado
        </h1>
        <h2 className={`text-4xl sm:text-7xl font-bold text-[#8892b0] ${visible ? 'fade-in' : ''}`}>
          I'm a Full Stack Web Developer.
        </h2>
        <p className={`text-[#8892b0] py-4 max-w-[700px] ${visible ? 'fade-in' : ''}`}>
          I’m a full-stack web developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <p className={`text-[#8892b0] py-4 max-w-[700px] ${visible ? 'fade-in' : ''}`}>
          I have spent the last 10 years in the healthcare field working as a perinatal technician at UCLA health system. I have always had a
          knack for technology and working with computers. In 2021, I started
          working with HTML and CSS to make some minor edits on a small
          business website that I was operating. What I thought was just a few small edits turned into a love for programming.
        </p>
        <div>
          <button
            onClick={scrollToWork}
            className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'
          >
            View Work
            <span className='group-hover:rotate-90 duration-300 transform'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
      {/* Work Section */}
      <div ref={workRef} className='w-full h-screen bg-[#1a2a3a]' id="work">
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <h1 className='text-4xl sm:text-7xl font-bold text-white'>
          
          </h1>
          {/* ...other work section content... */}
        </div>
      </div>
    </div>
  );
};

export default Home;
