import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'Ayman_Portfolio',      // Remplacez par votre Service ID
      'template_ct1vdqc',     // Remplacez par votre Template ID
      e.target,
      'v0nxUFcm05DHnn2tc'     // Remplacez par votre User ID (clé publique)
    )
    .then((result) => {
      console.log("Message envoyé", result.text);
      setSubmitted(true); // Affiche un message de confirmation
    }, (error) => {
      console.log("Erreur", error.text);
    });

    e.target.reset(); // Reset le formulaire après l'envoi
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-[#0a192f] to-[#1c2736] flex justify-center items-center p-6"
    >
      <form
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full bg-[#112240] p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
      >
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-400 py-4">
          // Submit the form below or send me an email at
            <a href="mailto:ayman.ibnouennadre@gmail.com" className="text-pink-600 underline ml-1">
              ayman.ibnouennadre@gmail.com
            </a>
          </p>
        </div>

        <input
          aria-label="Votre Nom"
          className="bg-[#ccd6f6] p-4 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-600 mb-4 transition duration-200"
          type="text"
          placeholder="Nom"
          name="from_name" // Correspond à {{from_name}} dans le modèle EmailJS
          required
        />

        <input
          aria-label="Votre Email"
          className="bg-[#ccd6f6] p-4 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-600 mb-4 transition duration-200"
          type="email"
          placeholder="Email"
          name="reply_to" // Correspond à {{reply_to}} dans le modèle EmailJS
          required
        />

        <textarea
          aria-label="Votre Message"
          className="bg-[#ccd6f6] p-4 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-600 mb-4 transition duration-200"
          name="message" // Correspond à {{message}} dans le modèle EmailJS
          rows="6"
          placeholder="Message"
          required
        ></textarea>

        <button
          type="submit"
          className="text-white bg-pink-600 px-6 py-3 mt-4 rounded-md shadow-md hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-600 w-full font-semibold"
        >
          Let's Collaborate
        </button>

        {submitted && (
          <p className="text-center text-green-500 mt-4">Thank you for your message! I will get back to you soon.</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
