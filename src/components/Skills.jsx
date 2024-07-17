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
import NextJS from '../assets/nextjs.png'; // Import Next.js image with correct filename

const skills = [
  { name: 'HTML', img: HTML },
  { name: 'CSS', img: CSS },
  { name: 'JavaScript', img: JavaScript },
  { name: 'React', img: ReactImg },
  { name: 'Node JS', img: Node },
  { name: 'Mongo DB', img: Mongo },
  { name: 'AWS', img: AWS },
  { name: 'GitHub', img: GitHub },
  { name: 'Firebase', img: FireBase },
  { name: 'Tailwind', img: tailwind },
  { name: 'MySQL', img: mysql },
  { name: 'Next.js', img: NextJS }, // Add Next.js to the skills array
];

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {skills.map(({ name, img }) => (
            <div
              key={name}
              className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg p-4 bg-[#1e293b]'
            >
              <img className='w-20 mx-auto' src={img} alt={`${name} icon`} />
              <p className='my-4'>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
