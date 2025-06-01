import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import mysql from '../assets/mysql.PNG';
import NextJS from '../assets/nextjs.png';

const skills = [
  { name: 'HTML', img: HTML },
  { name: 'CSS', img: CSS },
  { name: 'JavaScript', img: JavaScript },
  { name: 'React', img: ReactImg },
  { name: 'Node.js', img: Node },
  { name: 'MongoDB', img: Mongo },
  { name: 'AWS', img: AWS },
  { name: 'GitHub', img: GitHub },
  { name: 'Firebase', img: FireBase },
  { name: 'Tailwind', img: tailwind },
  { name: 'MySQL', img: mysql },
  { name: 'Next.js', img: NextJS },
];

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-gradient-to-b from-[#0a192f] to-[#0f2942] text-gray-300 py-24'>
      <div className='max-w-[1200px] mx-auto px-6'>
        <div className='flex flex-col items-center mb-16'>
          <h2 className='text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500'>
            Skills
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6'></div>
          <p className='text-xl text-gray-400 text-center max-w-2xl'>
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
          {skills.map(({ name, img }) => (
            <div
              key={name}
              className='group relative bg-[#1a2a3a]/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 ease-in-out'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300'></div>
              
              <div className='relative z-10 flex flex-col items-center'>
                <div className='p-4 rounded-xl bg-gray-800/50 group-hover:bg-gray-800/80 transition-colors duration-300 mb-4'>
                  <img 
                    className='w-16 h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300' 
                    src={img} 
                    alt={`${name} icon`} 
                  />
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

export default Skills;
