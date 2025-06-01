// src/components/FAQ.js

import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I offer comprehensive full-stack web development services, including front-end development with modern frameworks like React, back-end development with Node.js, database design, API development, and responsive web design. I also provide consulting services for technology stack selection and architecture design."
  },
  {
    question: "How can I contact you?",
    answer: "You can reach me through multiple channels: Email me at rober2091@icloud.com, connect with me on LinkedIn, or use the contact form on this website. I typically respond within 24 hours during business days."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in a modern tech stack including React, Node.js, MongoDB, Express.js, and various other technologies. I'm also proficient in HTML5, CSS3, JavaScript (ES6+), TypeScript, and have experience with cloud platforms like AWS and Azure. I stay current with the latest web development trends and best practices."
  },
  {
    question: "What is your development process?",
    answer: "My development process follows an agile methodology, starting with requirements gathering and planning, followed by design, development, testing, and deployment. I maintain clear communication throughout the project and provide regular updates on progress. I also ensure code quality through best practices and thorough testing."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, I offer ongoing support and maintenance services for all projects I develop. This includes regular updates, bug fixes, performance optimization, and feature enhancements. I believe in building long-term relationships with my clients and ensuring their digital solutions continue to perform optimally."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div name='faq' className='w-full bg-gradient-to-b from-[#0a192f] to-[#0f2942] text-gray-300 py-24'>
      <div className='max-w-[1200px] mx-auto px-6'>
        <div className='flex flex-col items-center mb-16'>
          <h2 className='text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500'>
            FAQ
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6'></div>
          <p className='text-xl text-gray-400 text-center max-w-2xl'>
            Frequently asked questions about my services and process
          </p>
        </div>

        <div className='max-w-3xl mx-auto space-y-4'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='group bg-[#1a2a3a]/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300'
            >
              <button
                onClick={() => toggleFAQ(index)}
                className='w-full px-6 py-4 text-left flex justify-between items-center'
              >
                <h3 className='text-xl font-semibold text-gray-200 group-hover:text-pink-500 transition-colors duration-300'>
                  {faq.question}
                </h3>
                <HiChevronDown
                  className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className='px-6 pb-4'>
                  <p className='text-gray-400 leading-relaxed'>
                    {faq.answer}
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

export default FAQ;
