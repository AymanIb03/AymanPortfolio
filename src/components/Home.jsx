import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll'; // Import Link component

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          AYMAN IBNOUENNADRE
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Software Engineer .
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I will graduate in 2026 from the 
          <a href="https://emsi.ma/" target="_blank" rel="noopener noreferrer" className="text-pink-600">
             &nbsp; <u>Moroccan School of Engineering Sciences (EMSI)</u> 
          </a> , where I am honing my
          skills in software engineering and preparing to tackle real-world technological
          challenges. I am passionate about creating impactful software solutions and
          continuously expanding my knowledge in modern development practices.
        </p>

        <div>
          {/* Button that links to About section */}
          <Link 
            to="about" // Link to the About section
            smooth={true} // Smooth scrolling effect
            duration={500} // Scroll duration
            offset={-80} // Adjust scroll position
          >
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              GET TO KNOW ME
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
