import React from 'react';
import { motion } from 'framer-motion'; // Importer Framer Motion pour les animations
import Micro from '../assets/Micro.JPG'; // Assurez-vous que l'image est bien importée
import Photo1 from '../assets/DSC_0582.jpg'; 
import Photo2 from '../assets/DSC_0587.jpg'; 

import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'; // Import icons for location and date

const About = () => {
  // Liste des photos
  const photos = [Micro, Photo1, Photo2];

  return (
    <motion.div
      name="about"
      className="w-full py-14 bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        
        {/* Section Title with scroll animation */}
        <motion.div
          className="max-w-[1000px] w-full grid grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </motion.div>

        {/* Introduction with scroll animation */}
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <motion.div
            className="sm:text-right text-4xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p>Hi. I'm Ayman Ibnouennadre, nice to meet you. Please take a look around.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p>
              I'm passionate about building impactful software that enhances the lives of those around me. I specialize in creating solutions for a range of clients, from individuals and small businesses to large enterprises. With a strong foundation in software engineering, I am dedicated to delivering robust, scalable, and user-friendly applications.
              Imagine what you could achieve with a software expert at your fingertips — let's make it happen!
            </p>
          </motion.div>
        </div>

        {/* Section EMSI IT Summer Competition 2024 with scroll-based animation */}
        <motion.div
          className="max-w-[1000px] w-full grid grid-cols-1 gap-8 px-4 mt-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-[#ccd6f6]">
              Winner of EMSI IT Summer Competition 2024
            </p>
            <div className="flex justify-center items-center gap-2 mt-4">
              <FaMapMarkerAlt className="text-pink-600" />
              <p className="font-semibold text-[#8892b0]">
                <a 
                  href="https://www.google.com/maps/place/EMSI+MOULAY+YOUSSEF/@33.5926405,-7.6301384,17z/data=!3m1!4b1!4m6!3m5!1s0xda7d38340b29049:0xde05d3824336cfc4!8m2!3d33.5926405!4d-7.6275635!16s%2Fg%2F11t6_sv8y4?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank" 
                  className="text-[#ccd6f6] underline hover:text-pink-600"
                >
                  EMSI Moulay Youssef, Casablanca
                </a>
              </p>
            </div>
            <div className="flex justify-center items-center gap-2 mt-2">
              <FaCalendarAlt className="text-pink-600" />
              <p className="font-semibold text-[#8892b0]">21/11/2024</p>
            </div>
          </div>
        </motion.div>

        {/* Photo Gallery Section with scroll animation */}
        <motion.div
          className="mt-8 w-full flex justify-center flex-wrap gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }} // Trigger animation when in viewport
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img 
                src={photo}
                alt={`Gallery ${index}`}
                loading="lazy" // Ajout du lazy loading pour les images
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.div>
  );
};

export default About;
