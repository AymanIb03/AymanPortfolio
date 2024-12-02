import React, { useState, useEffect } from 'react';
import { data } from "../data/data.js";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import de AOS CSS
import { motion } from 'framer-motion'; // Importer Framer Motion pour les animations

const Work = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
        window.addEventListener('load', AOS.refresh);
    }, []);

    const openModal = (project) => {
        setCurrentProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentProject(null);
    };

    const projectList = data;

    return (
        <div name='works' className='w-full py-14 text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p 
                        className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'
                        data-aos="fade-up"
                    >
                        Works
                    </p>
                    <p 
                        className='py-6' 
                        data-aos="fade-up"
                    >
                        // Discover some of my recent projects
                    </p>
                </div>

                {/* Project grid avec animation */} 
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {projectList.map((project) => (
                        <motion.div
                            key={project.id}
                            style={{ backgroundImage: `url(${project.image})` }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md 
                                      flex justify-center text-center items-center mx-auto content-div"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            data-aos="fade-up" // Animation pour chaque projet
                        >
                            <div className="opacity-0 group-hover:opacity-100 p-4">
                                <span className="text-xl font-semibold text-white tracking-wider">
                                    {project.name}
                                </span>
                                <div className="pt-4 text-center">
                                    {project.type === "frontend-backend" && (
                                        <>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <button className="text-center rounded-md px-3 py-2 m-1 bg-white text-gray-700 font-medium text-sm hover:bg-pink-600 hover:text-white transition duration-300">
                                                    Backend
                                                </button>
                                            </a>
                                            <a href={project.frontend} target="_blank" rel="noopener noreferrer">
                                                <button className="text-center rounded-md px-3 py-2 m-1 bg-white text-gray-700 font-medium text-sm hover:bg-pink-600 hover:text-white transition duration-300">
                                                    Frontend
                                                </button>
                                            </a>
                                        </>
                                    )}
                                    {project.type === "fullstack" && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <button className="text-center rounded-md px-3 py-2 m-1 bg-white text-gray-700 font-medium text-sm hover:bg-pink-600 hover:text-white transition duration-300">
                                                Code
                                            </button>
                                        </a>
                                    )}
                                    <button
                                        onClick={() => openModal(project)}
                                        className="text-center rounded-md px-3 py-2 m-1 bg-white text-gray-700 font-medium text-sm hover:bg-pink-600 hover:text-white transition duration-300"
                                    >
                                        🔍 Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal pour les détails du projet */}
                {isModalOpen && currentProject && (
                    <div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                        onClick={closeModal}
                    >
                        <div
                            className="bg-gray-800 rounded-lg max-w-3xl w-full h-[80vh] overflow-y-auto relative"
                            onClick={(e) => e.stopPropagation()}
                            data-aos="fade-up" // Animation du modal
                        >
                            <div className="sticky top-0 bg-gray-800 flex justify-between items-center p-4 border-b border-gray-600 z-10">
                                <h2 className="text-xl font-bold text-white">{currentProject.name}</h2>
                                <button
                                    onClick={closeModal}
                                    className="text-pink-600 text-2xl font-bold"
                                >
                                    ❌
                                </button>
                            </div>

                            <div className="p-6">
                                <p className="text-gray-300 mb-6">{currentProject.description}</p>
                                 
                                {/* Galerie d'images */}
                                <div className="space-y-4">
                                    {currentProject.gallery.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`${currentProject.name} screenshot ${index + 1}`}
                                            className="w-full h-auto rounded-lg"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Work;
