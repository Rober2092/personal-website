import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Maci Ames',
    role: 'Project Manager',
    company: 'Tech Solutions Inc.',
    feedback: 'Hugo did an amazing job on our project. His attention to detail and technical expertise were outstanding. He delivered a high-quality solution that exceeded our expectations. Highly recommend his work!',
    image: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    name: 'Jane Smith',
    role: 'CEO',
    company: 'Digital Innovations',
    feedback: 'Professional and dedicated. Hugo was a pleasure to work with. His ability to understand our needs and translate them into a perfect solution was impressive. The project was delivered on time and within budget.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    name: 'John Davis',
    role: 'CTO',
    company: 'Future Tech',
    feedback: 'Working with Hugo was a game-changer for our company. His technical skills and problem-solving abilities helped us overcome complex challenges. The end result was a robust and scalable solution.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  }
];

const Testimonials = () => {
  return (
    <div name='testimonials' className='w-full bg-gradient-to-b from-[#0a192f] to-[#0f2942] text-gray-300 py-24'>
      <div className='max-w-[1200px] mx-auto px-6'>
        <div className='flex flex-col items-center mb-16'>
          <h2 className='text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500'>
            Testimonials
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6'></div>
          <p className='text-xl text-gray-400 text-center max-w-2xl'>
            What my clients say about working with me
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='group relative bg-[#1a2a3a]/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 ease-in-out'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300'></div>
              
              <div className='relative z-10'>
                <div className='flex items-center gap-4 mb-6'>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className='w-16 h-16 rounded-full border-2 border-pink-500/50'
                  />
                  <div>
                    <h3 className='text-xl font-semibold text-white group-hover:text-pink-500 transition-colors duration-300'>
                      {testimonial.name}
                    </h3>
                    <p className='text-gray-400'>{testimonial.role}</p>
                    <p className='text-sm text-gray-500'>{testimonial.company}</p>
                  </div>
                </div>

                <div className='relative'>
                  <FaQuoteLeft className='absolute -top-2 -left-2 w-6 h-6 text-pink-500/20' />
                  <p className='text-gray-300 leading-relaxed pl-4'>
                    {testimonial.feedback}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
