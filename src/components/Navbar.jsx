import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaHandHoldingUsd,
  FaShareAlt,
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { IoIosArrowUp } from 'react-icons/io'; // Icône de la flèche vers le haut
import AI from '../assets/AI.png';
import { Link } from 'react-scroll';
import ResumePDF from '../assets/Ayman CV .pdf';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [socialVisible, setSocialVisible] = useState(true); // Etat pour gérer la visibilité des icônes sociales
  const [isHomeVisible, setIsHomeVisible] = useState(false); // Etat pour vérifier si la section "home" est active

  const handleClick = () => setNav(!nav);

  const toggleSocialIcons = () => setSocialVisible(!socialVisible); // Fonction pour changer l'état de visibilité des icônes sociales

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10'>
      <div>
        <img src={AI} alt='Logo Image' style={{ width: '50px' }} />
      </div>

      {/* Menu de navigation - Desktop */}
      <ul className='hidden md:flex'>
        {['home', 'about', 'skills', 'works', 'certificates', 'contact'].map((section) => (
          <li key={section} className="mx-2">
            <Link
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="border-2 border-transparent px-4 py-2 hover:bg-pink-600 hover:border-pink-600 duration-300"
              activeClass="bg-pink-600 border-pink-600"
              onSetActive={(section) => {
                if (section === 'home') {
                  setIsHomeVisible(true); // Lorsque la section "home" devient active, on le garde en visible
                } else {
                  setIsHomeVisible(false); // Masquer la flèche dans les autres sections
                }
              }}
            >
              {section.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger pour le menu mobile */}
      <div onClick={handleClick} className='md:hidden z-10 text-3xl'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          nav ? 'translate-x-0' : 'translate-x-full'
        } absolute top-0 right-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center transition-transform duration-300 ease-in-out`}
      >
        {['home', 'about', 'skills', 'works', 'certificates', 'contact'].map((section) => (
          <li key={section} className="py-6 text-4xl">
            <Link 
              onClick={handleClick} 
              to={section} 
              smooth={true} 
              duration={500} 
              spy={true}
              offset={-80}
              activeClass="text-pink-600"
              onSetActive={(section) => {
                if (section === 'home') {
                  setIsHomeVisible(true); // Lorsqu'on est sur la section "home", la flèche est cachée
                } else {
                  setIsHomeVisible(false); // Dans les autres sections, on montre la flèche
                }
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons (affichées selon l'état socialVisible) */}
      <div className={`flex fixed flex-col top-[35%] left-0 transition-transform duration-300 ease-in-out ${socialVisible ? 'translate-x-0' : '-translate-x-[200px]'}`}>
        <ul>
          {/* Liste des icônes sociales */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/ayman-ibnouennadre-860766271/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/AymanIbnouennadre'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1DBF73]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.fiverr.com/ayman_ibnouenna?public_mode=true' 
              target='_blank'
              rel='noopener noreferrer'
            >
              Fiverr <FaHandHoldingUsd size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={ResumePDF}
              download="Ayman_CV.pdf"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

      {/* Bouton pour afficher/masquer les icônes sociales */}
      <div 
        onClick={toggleSocialIcons} 
        className='fixed bottom-8 left-8 bg-pink-600 p-4 rounded-full cursor-pointer text-white hover:bg-pink-700 transition-all duration-300'
      >
        {socialVisible ? (
          <FaTimes size={20} />
        ) : (
          <FaShareAlt size={20} />
        )}
      </div>

      {/* Bouton flèche vers le haut avec effet de transition fade-in */}
      <div
        className={`fixed bottom-8 right-8 bg-pink-600 p-4 rounded-full cursor-pointer hover:bg-pink-700 transition-opacity duration-500 ease-out ${isHomeVisible ? 'opacity-0' : 'opacity-100'}`}
      >
        <Link
          to="home"
          smooth={true}
          duration={700}
          className='flex justify-center items-center text-white'
        >
          <IoIosArrowUp size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
