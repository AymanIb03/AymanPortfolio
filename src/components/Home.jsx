import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll'; // Import Link component
import { motion } from 'framer-motion'; // Animation library

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        
        {/* Introduction text with fade-in and bounce */}
        <motion.p
          className="text-pink-600"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: false }}  // L'animation peut se déclencher à chaque passage dans la vue
          transition={{ duration: 1, delay: 0.2 }}
        >
          Hi, my name is
        </motion.p>
        
        {/* Name with bounce effect */}
        <motion.h1
          className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          viewport={{ once: false }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          AYMAN IBNOUENNADRE
        </motion.h1>
        
        {/* Profession with more dramatic fade-in */}
        <motion.h2
          className="text-4xl sm:text-7xl font-bold text-[#8892b0]"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          viewport={{ once: false }} 
          transition={{ duration: 1, delay: 0.5 }}
        >
          I'm a Software Engineer.
        </motion.h2>
        
        {/* Short bio with animation effects */}
        <motion.p
          className="text-[#8892b0] py-4 max-w-[700px]"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: false }} 
          transition={{ duration: 1, delay: 1 }}
        > 
        
        <p  className="text-justify ">
        As a Full-Stack Developer, I create scalable software solutions to solve real-world challenges. With a solid foundation from  &nbsp;
          
          <a 
            href="https://emsi.ma/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-pink-600 underline hover:text-pink-400 transition-all duration-300 text-justified"
          >
            The  Moroccan School of Engineering Sciences 
          </a>
          &nbsp; and experience in modern development practices, I build high-performance, user-centered applications that stand out in today’s tech world.
        </p>
          </motion.p>

        {/* Button with hover and animation effects */}
        <div>
          <Link
            to="about" // Link to the About section
            smooth={true} // Smooth scrolling effect
            duration={500} // Scroll duration
            offset={-80} // Adjust scroll position
          >
            <motion.button
              className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              GET TO KNOW ME
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
