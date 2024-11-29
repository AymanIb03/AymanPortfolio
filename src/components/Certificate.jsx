import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing the Font Awesome search icon

// List of certificates with their names and companies
const certificates = [
    { name: 'Meta Front-end Developer', fileName: 'FrontendMeta.png', company: 'META' },
    { name: 'JavaScript', fileName: 'Javascript_meta.jpg', company: 'Meta' },
    { name: 'React Js', fileName: 'AdvanceReact.png', company: 'META' },
    { name: 'Python', fileName: 'Python.jpg', company: 'University Of Michigan' },
    { name: '.NET Core', fileName: 'dotnetcore.png', company: 'EDUCBA' },
    { name: 'Java FullStack Developer', fileName: 'JAVA.png', company: 'BOORD INFINITY' },
    { name: 'Oracle Autonomous Database Professional Workshop', fileName: 'autonomous.png', company: 'ORACLE' },
    { name: 'Databases For Data Scientists', fileName: 'Database.jpg', company: 'University Of Colorado' },
    { name: 'Linux Administration', fileName: 'Linux.png', company: 'IBM & REDHAT' },
    { name: 'HTML/CSS/JS ', fileName: 'HtmlCssJs.jpg', company: 'Johns Hopkins University' },
    { name: 'Object Oriented Programming', fileName: 'OOP.jpg', company: 'University Of London' },
    { name: 'Web Design ', fileName: 'WebDesign.jpg', company: 'University Of Michigan' },
    { name: 'Software Engineering ', fileName: 'SoftwareEngineering.jpg', company: 'HKUST' },
    { name: 'Soft Skills ', fileName: 'softskills.jpg', company: 'IBM' },
    { name: 'Wordpress', fileName: 'Wordpress.png', company: 'Coursera Project Network' },
    { name: 'Shopify', fileName: 'Shopify.png', company: 'Coursera Project Network' },
    { name: 'C++ ', fileName: 'certificatc++.jpg', company: 'EPFL' },
    { name: 'Arduino And C Porgramming', fileName: 'certificatarduino.jpg', company: 'University Of California' },
    { name: 'Unix Workbench', fileName: 'certificat_unix_page.jpg', company: 'Johns Hopkins University' },
    { name: 'African Cities: Environment and Sustainable Development Challenges', fileName: 'certificat_africa.jpg', company: 'EPFL' },
    { name: 'Documentary Research', fileName: 'certificat_recherche.jpg', company: 'Polytechnic Institute of Paris' },
    
    
    
    
    
    
];

const Certificate = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const openModal = (certificate) => {
        setSelectedCertificate(certificate);
    };

    const closeModal = () => {
        setSelectedCertificate(null);
    };

    return (
        <div name="certificates" className="w-full min-h-screen bg-[#0a192f] text-gray-300 py-14">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Certificates</p>
                    <p className='py-6'>// Here are some of my professional certifications</p>
                </div>

                {/* Certificates Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="shadow-lg shadow-[#040c16] group container rounded-md 
                                      flex justify-center text-center items-center mx-auto content-div bg-[#112240] p-4"
                        >
                            <div 
                                className="relative w-full h-full flex items-center justify-center"
                                style={{
                                    backgroundImage: `url(${require(`../assets/Cer/${cert.fileName}`)})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                {/* Hover overlay and content */}
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                                    <span className="text-xl font-semibold text-white">{cert.name}</span>
                                    <span className="text-gray-300">{cert.company}</span>
                                    <button
                                        onClick={() => openModal(cert)}
                                        className="text-center rounded-md px-3 py-2 mt-4 bg-white text-gray-700 font-medium text-sm hover:bg-pink-600 hover:text-white transition duration-300 flex items-center"
                                    >
                                        <FaSearch className="mr-2" /> View
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal to display the enlarged certificate */}
                {selectedCertificate && (
                    <div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                        onClick={closeModal} // Close modal when clicking outside
                        style={{ top: '60px' }} // Offset to avoid the navbar
                    >
                        <div
                            className="bg-gray-800 p-4 rounded-lg max-w-3xl w-full relative"
                            onClick={(e) => e.stopPropagation()} // Prevent propagation to avoid closing modal on content click
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-2 right-2 text-pink-600 text-2xl font-bold"
                            >
                                ❌
                            </button>
                            <div className="flex justify-between mb-4">
                                <h2 className="text-xl font-bold text-white">{selectedCertificate.name}</h2>
                            </div>
                            <img
                                src={require(`../assets/Cer/${selectedCertificate.fileName}`)}
                                alt={selectedCertificate.name}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Certificate;
