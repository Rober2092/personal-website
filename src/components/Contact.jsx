import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/422e5f4e-ffe3-4756-a13f-1f39c1116c28" className={`flex flex-col max-w-[600px] w-full ${visible ? 'fade-in' : ''}`}>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>/ Submit the form below or shoot me an email - rober2091@icloud.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-600 transition duration-300' type="text" placeholder='Name' name='name' />
        <input className='bg-[#ccd6f6] p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-600 transition duration-300' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-600 transition duration-300' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center transition duration-300'>Let's Collaborate</button>
      </form>
    </div>
  );
}

export default Contact;
