import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaUserTie,
  FaHandHoldingUsd,
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import AI from '../assets/AI.png';
import { Link } from 'react-scroll';
import ResumePDF from '../assets/Ayman cv pfa.pdf'; // Importez le fichier PDF

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10'>
      <div>
        <img src={AI} alt='Logo Image' style={{ width: '50px' }} />
      </div>

      {/* Desktop menu */}
      <ul className='hidden md:flex'>
        {['home', 'about', 'skills', 'works', 'certificates','contact'].map((section) => (
          <li key={section} className="mx-2">
            <Link
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="border-2 border-transparent px-4 py-2 hover:bg-pink-600 hover:border-pink-600 duration-300"
              activeClass="bg-pink-600 border-pink-600"
            >
              {section.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          nav ? 'translate-x-0' : 'translate-x-full'
        } absolute top-0 right-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center transition-transform duration-300 ease-in-out`}
      >
        {['home', 'about', 'skills', 'work', 'contact'].map((section) => (
          <li key={section} className="py-6 text-4xl">
            <Link 
              onClick={handleClick} 
              to={section} 
              smooth={true} 
              duration={500} 
              spy={true}
              offset={-80}
              activeClass="text-pink-600"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
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
              href='https://github.com/AymanIb03'
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
              Freelance <FaHandHoldingUsd size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={ResumePDF} // Lien vers le fichier PDF
              download="Ayman_CV.pdf" // Permet de télécharger le fichier directement
            >
              Resume FR <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
