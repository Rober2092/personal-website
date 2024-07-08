import React from 'react';

const testimonials = [
  {
    name: 'Maci Ames',
    feedback: 'Hugo did an amazing job on our project. Highly recommend his work!',
  },
  {
    name: 'Jane Smith',
    feedback: 'Professional and dedicated. Hugo was a pleasure to work with.',
  },
];

const Testimonials = () => {
  return (
    <div name='testimonials' className='w-full bg-[#0a192f] text-gray-300 py-16'>
      <div className='max-w-[1000px] mx-auto px-4'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Testimonials</p>
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='bg-[#1a2a3a] p-6 rounded-lg shadow-lg hover:bg-pink-600 hover:scale-105 transition-transform duration-300 ease-in-out'
            >
              <p className='text-xl font-semibold'>{testimonial.name}</p>
              <p className='mt-4'>{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
