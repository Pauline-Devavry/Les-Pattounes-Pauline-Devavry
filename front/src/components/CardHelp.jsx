import React from 'react';

function CardHelp({ title, description, link, imageSrc, buttonText }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center w-96 transform hover:scale-105 transition duration-300">
      <img src={imageSrc} alt={title} className="w-24 h-24 mx-auto mb-4" />
      <h3 className="text-xl font-montserrat font-semibold text-gray-800">{title}</h3>
      <p className="text-textColor text-base font-light my-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primaryColor text-white px-4 py-2 rounded-md hover:bg-opacity-80"
      >
        {buttonText}
      </a>
    </div>
  );
}

export default CardHelp;
