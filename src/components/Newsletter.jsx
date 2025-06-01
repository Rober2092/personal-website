// src/components/Newsletter.js

import React, { useState } from 'react';
import { HiMail } from 'react-icons/hi';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Add your form submission logic here
    alert(`Subscribed with ${email}`);
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <div name='newsletter' className='w-full bg-gradient-to-b from-[#0a192f] to-[#0f2942] text-gray-300 py-24'>
      <div className='max-w-[1200px] mx-auto px-6'>
        <div className='flex flex-col items-center mb-16'>
          <h2 className='text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500'>
            Newsletter
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6'></div>
          <p className='text-xl text-gray-400 text-center max-w-2xl'>
            Stay updated with the latest insights, tips, and news from the world of web development
          </p>
        </div>

        <div className='max-w-2xl mx-auto'>
          <div className='bg-[#1a2a3a]/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='relative group'>
                <div className='absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300'></div>
                <div className='relative flex items-center'>
                  <HiMail className='absolute left-4 w-6 h-6 text-gray-500' />
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email address'
                    className='w-full pl-12 pr-4 py-4 bg-[#1a2a3a]/50 backdrop-blur-sm rounded-xl border border-gray-700/50 focus:border-pink-500/50 text-gray-300 placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500/20'
                    required
                  />
                </div>
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className={`w-full py-4 px-8 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium transition-all duration-300 ${
                  isSubmitting 
                    ? 'opacity-75 cursor-not-allowed' 
                    : 'hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-pink-500/20'
                }`}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
              </button>

              <p className='text-sm text-gray-500 text-center'>
                By subscribing, you agree to receive updates and marketing communications from me.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
