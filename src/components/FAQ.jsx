// src/components/FAQ.js

import React from 'react';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I offer full-stack web development services including front-end and back-end development."
  },
  {
    question: "How can I contact you?",
    answer: "You can contact me via email at rober2091@icloud.com or through my social media profiles."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in React, Node.js, MongoDB, Express.js, and more."
  },
];

const FAQ = () => {
  return (
    <div name='faq' className='w-full bg-[#0a192f] text-gray-300 py-16'>
      <div className='max-w-[1000px] mx-auto px-4'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>FAQ</p>
        <div className='mt-8'>
          {faqs.map((faq, index) => (
            <div key={index} className='mb-6'>
              <h3 className='text-2xl font-semibold'>{faq.question}</h3>
              <p className='mt-2'>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
