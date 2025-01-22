import React, { useState, useEffect } from 'react';

function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour revenir en haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  // Montrer/cacher le bouton en fonction du défilement
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className=" text-5xl fixed bottom-4 right-4 bg-buttonColor text-white p-6 rounded-full border-2 shadow-lg hover:bg-opacity-80 transition-opacity duration-300"
          aria-label ="Retour en haut"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default TopButton;
