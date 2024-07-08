// src/components/Newsletter.js

import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert(`Subscribed with ${email}`);
  };

  return (
    <div name='newsletter' className='w-full bg-[#0a192f] text-gray-300 py-16'>
      <div className='max-w-[1000px] mx-auto px-4 text-center'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Newsletter</p>
        <p className='mt-4'>Subscribe to my newsletter to get the latest updates.</p>
        <form onSubmit={handleSubmit} className='mt-8'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            className='px-4 py-2 rounded-lg bg-gray-800 text-gray-300 border border-gray-700'
            required
          />
          <button type='submit' className='ml-4 px-4 py-2 rounded-lg bg-pink-600 text-white hover:bg-pink-700 transition duration-300'>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
