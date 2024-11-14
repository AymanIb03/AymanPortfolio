import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full py-14 bg-[#0a192f] text-gray-300 '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Ayman Ibnouennadre, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I'm passionate about building impactful software that enhances the lives of those around me. I specialize in creating solutions for a range of clients, from individuals and small businesses to large enterprises. With a strong foundation in software engineering, I am dedicated to delivering robust, scalable, and user-friendly applications.

Imagine what you could achieve with a software expert at your fingertips — let's make it happen!</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
