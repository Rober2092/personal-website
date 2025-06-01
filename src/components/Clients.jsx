import React from 'react';
import { FaReact, FaNodeJs, FaAws, FaGithub } from 'react-icons/fa';
import { SiMicrosoft, SiMicrosoftazure, SiDocker, SiJenkins } from 'react-icons/si';

const clients = [
  { name: 'React', icon: <FaReact size={40} className="text-pink-500" /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} className="text-pink-500" /> },
  { name: 'AWS', icon: <FaAws size={40} className="text-pink-500" /> },
  { name: 'GitHub', icon: <FaGithub size={40} className="text-pink-500" /> },
  { name: 'Power Apps', icon: <SiMicrosoft size={40} className="text-pink-500" /> },
  { name: 'Azure', icon: <SiMicrosoftazure size={40} className="text-pink-500" /> },
  { name: 'Docker', icon: <SiDocker size={40} className="text-pink-500" /> },
  { name: 'Jenkins', icon: <SiJenkins size={40} className="text-pink-500" /> },
];

const Clients = () => {
  return (
    <div name='clients' className='w-full bg-gradient-to-b from-[#0a192f] to-[#0f2942] text-gray-300 py-24'>
      <div className='max-w-[1200px] mx-auto px-6'>
        <div className='flex flex-col items-center mb-16'>
          <h2 className='text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500'>
            Technologies
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6'></div>
          <p className='text-xl text-gray-400 text-center max-w-2xl'>
            Some of the technologies and platforms I've worked with
          </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
          {clients.map(({ name, icon }) => (
            <div 
              key={name} 
              className='group relative bg-[#1a2a3a]/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 ease-in-out'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300'></div>
              
              <div className='relative z-10 flex flex-col items-center'>
                <div className='p-4 rounded-xl bg-gray-800/50 group-hover:bg-gray-800/80 transition-colors duration-300 mb-4'>
                  {icon}
                </div>
                <h3 className='text-lg font-semibold text-center group-hover:text-pink-500 transition-colors duration-300'>
                  {name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
