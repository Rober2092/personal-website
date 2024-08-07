import React, { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      const rect = section.getBoundingClientRect();
      const viewHeight = window.innerHeight;

      if (rect.top <= viewHeight * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id='about' className='w-full h-screen bg-[#0a192f] text-gray-300 flex items-center'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className={`sm:text-right pb-8 pl-4 ${isVisible ? 'animate-fadeIn' : ''}`}>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className={`sm:text-right text-4xl font-bold ${isVisible ? 'animate-fadeIn' : ''}`}>
            <p>Hi. I'm Hugo, nice to meet you. Please take a look around.</p>
          </div>
          <div className={`text-lg ${isVisible ? 'animate-fadeIn' : ''}`}>
            <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
