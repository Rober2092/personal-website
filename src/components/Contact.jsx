import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div name='contact' className='w-full bg-gradient-to-b from-[#0a192f] to-[#0f2942] text-gray-300 py-24'>
      <div className='max-w-[1200px] mx-auto px-6'>
        <div className='flex flex-col items-center mb-16'>
          <h2 className='text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500'>
            Contact
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6'></div>
          <p className='text-xl text-gray-400 text-center max-w-2xl'>
            Let's work together to bring your ideas to life
          </p>
        </div>

        <div className='max-w-[600px] mx-auto'>
          <form 
            method='POST' 
            action="https://getform.io/f/422e5f4e-ffe3-4756-a13f-1f39c1116c28" 
            className={`flex flex-col gap-6 ${visible ? 'fade-in' : ''}`}
          >
            <div className='group relative'>
              <input 
                className='w-full bg-[#1a2a3a]/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 focus:border-pink-500/50 text-gray-300 placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500/20' 
                type="text" 
                placeholder='Name' 
                name='name' 
                required
              />
              <div className='absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none'></div>
            </div>

            <div className='group relative'>
              <input 
                className='w-full bg-[#1a2a3a]/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 focus:border-pink-500/50 text-gray-300 placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500/20' 
                type="email" 
                placeholder='Email' 
                name='email' 
                required
              />
              <div className='absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none'></div>
            </div>

            <div className='group relative'>
              <textarea 
                className='w-full bg-[#1a2a3a]/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 focus:border-pink-500/50 text-gray-300 placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500/20 resize-none' 
                name="message" 
                rows="6" 
                placeholder='Message'
                required
              ></textarea>
              <div className='absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none'></div>
            </div>

            <button 
              className='w-full py-4 px-8 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500/20'
              type='submit'
            >
              Let's Collaborate
            </button>

            <p className='text-center text-gray-400 mt-4'>
              Or shoot me an email at{' '}
              <a 
                href="mailto:rober2091@icloud.com" 
                className='text-pink-500 hover:text-pink-400 transition-colors duration-300'
              >
                rober2091@icloud.com
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
