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
    <div id='about' className='w-full bg-gradient-to-b from-[#0a192f] to-[#0f2942] text-gray-300 py-24'>
      <div className='max-w-[1200px] mx-auto px-6'>
        <div className='flex flex-col items-center mb-16'>
          <h2 className='text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500'>
            About Me
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6'></div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className={`space-y-6 ${isVisible ? 'animate-fadeIn' : ''}`}>
            <h3 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500'>
              Hi, I'm Hugo
            </h3>
            <p className='text-2xl text-gray-400 leading-relaxed'>
              A passionate software developer dedicated to creating impactful solutions
            </p>
          </div>

          <div className={`space-y-6 ${isVisible ? 'animate-fadeIn' : ''}`}>
            <div className='bg-[#1a2a3a]/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300'>
              <p className='text-lg text-gray-300 leading-relaxed'>
                I am passionate about building excellent software that improves
                the lives of those around me. I specialize in creating software
                for clients ranging from individuals and small businesses all the
                way to large enterprise corporations.
              </p>
              <p className='text-lg text-gray-300 leading-relaxed mt-4'>
                What would you do if you had a software expert available at your fingertips?
              </p>
            </div>

            <div className='flex gap-4'>
              <div className='flex-1 bg-[#1a2a3a]/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300'>
                <h4 className='text-xl font-semibold mb-2 text-pink-500'>Experience</h4>
                <p className='text-gray-400'>
                  Full-stack development with modern technologies
                </p>
              </div>
              <div className='flex-1 bg-[#1a2a3a]/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300'>
                <h4 className='text-xl font-semibold mb-2 text-pink-500'>Focus</h4>
                <p className='text-gray-400'>
                  Creating scalable and maintainable solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
