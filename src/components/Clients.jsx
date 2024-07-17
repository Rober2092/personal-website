import React from 'react';
import { FaReact, FaNodeJs, FaAws, FaGithub } from 'react-icons/fa';
import { SiMicrosoft, SiMicrosoftazure, SiDocker, SiJenkins } from 'react-icons/si'; // Import Docker and Jenkins icons

const clients = [
  { name: 'React', icon: <FaReact size={50} className="client-icon" /> },
  { name: 'Node.js', icon: <FaNodeJs size={50} className="client-icon" /> },
  { name: 'AWS', icon: <FaAws size={50} className="client-icon" /> },
  { name: 'GitHub', icon: <FaGithub size={50} className="client-icon" /> },
  { name: 'Power Apps', icon: <SiMicrosoft size={50} className="client-icon" /> }, // Use Microsoft icon for Power Apps
  { name: 'Azure', icon: <SiMicrosoftazure size={50} className="client-icon" /> }, // Add Azure icon
  { name: 'Docker', icon: <SiDocker size={50} className="client-icon" /> }, // Add Docker icon
  { name: 'Jenkins', icon: <SiJenkins size={50} className="client-icon" /> }, // Add Jenkins icon
];

const Clients = () => {
  return (
    <div name='clients' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Clients</p>
          <p className='py-4'>Some of the companies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {clients.map(({ name, icon }) => (
            <div key={name} className='shadow-md shadow-[#040c16] p-4 bg-[#1e293b] rounded-lg hover:bg-pink-600 transform hover:-translate-y-2 transition duration-300'>
              <div className='w-20 mx-auto'>{icon}</div>
              <p className='mt-4'>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
