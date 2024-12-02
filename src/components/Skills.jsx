import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/Bootstrap.png';
import Dotnet from '../assets/Dotnet.png';
import C from '../assets/C.png';
import SQL from '../assets/SQL.png';
import Java from '../assets/Java.png';
import Python from '../assets/Python.png';
import mui from '../assets/mui.png';
import shell from '../assets/shell.png';
import django from '../assets/Django.png';
import flask from '../assets/Flask.png';
import wordpress from '../assets/Wordpress.jpg';
import shopify from '../assets/Shopify.png';
import Oracle from '../assets/Oracle.webp';
import php from '../assets/php.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Dotnet} alt="HTML icon" />
                  <p className='my-4'>.NET CORE</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={C} alt="HTML icon" />
                  <p className='my-4'>C/C++/C#</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={django} alt="HTML icon" />
                  <p className='my-4'>DJANGO</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={flask} alt="HTML icon" />
                  <p className='my-4'>FLASK</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Java} alt="HTML icon" />
                  <p className='my-4'>JAVA</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                  <p className='my-4'>PYTHON</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={mui} alt="HTML icon" />
                  <p className='my-4'>M-UI</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Bootstrap} alt="HTML icon" />
                  <p className='my-4'>BOOTSTRAP</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={shell} alt="HTML icon" />
                  <p className='my-4'>SHELL SCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={SQL} alt="HTML icon" />
                  <p className='my-4'>SQL DATABASES</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={php} alt="HTML icon" />
                  <p className='my-4'>PHP</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={wordpress} alt="HTML icon" />
                  <p className='my-4'>WORDPRESS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={shopify} alt="HTML icon" />
                  <p className='my-4'>SHOPIFY</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Oracle} alt="HTML icon" />
                  <p className='my-4'>ORACLE DBA</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
