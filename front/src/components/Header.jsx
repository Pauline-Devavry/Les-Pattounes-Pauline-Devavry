import React, { useState, useEffect } from 'react'
import logoPattounes from '../images/blacklogo.png'
import logoFacebook from '../images/facebook.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
      <div className="flex px-4 bg-backgroundColor">
        <div className="w-2/6">
          <img className="w-28" src={logoPattounes} alt="Logo Pattounes" />
        </div>

        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          }  sm:block w-6/12 text-textMenuColor font-rubik font-bold content-center`}
        >
          <ul className="flex flex-col sm:flex-row justify-end">
            <li className="px-4 py-2 sm:py-0">
              <a href="/">Accueil</a>
            </li>
            <li className="px-4 py-2 sm:py-0">
              <a href="/chats">Chats à l'adoption</a>
            </li>
            <li className="px-4 py-2 sm:py-0">
              <a href="/nous-aider">Nous aider</a>
            </li>
            <li className="px-4 py-2 sm:py-0">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="sm:hidden flex justify-end w-full">
          <button
            aria-label="Ouvrir le menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-textMenuColor focus:outline-none"
          >
            {isMenuOpen ? (
              <span className="text-2xl">✖</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        <div className="w-1/12 ps-12 content-center">
          <img className="w-16" src={logoFacebook} alt="Logo Facebook" />
        </div>
      </div>
    </header>
  )
}

export default Header
