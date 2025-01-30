import React, { useState, useEffect } from 'react'
import logoPattounes from '../images/blacklogo.png'
import logoFacebook from '../images/facebook.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="px-4 container mx-auto">
      <div className="flex bg-backgroundColor">
        <div className="w-2/6">
          <a href="/">
            <img className="w-28" src={logoPattounes} alt="Logo Pattounes" />
          </a>
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

        <div className="flex justify-end items-center w-auto md:w-1/12 ml-auto">
          <a
            href="https://www.facebook.com/lespattounesducoeur/?locale=fr_FR"
            target="_blank"
          >
            <img
              className="w-16 h-16 object-contain"
              src={logoFacebook}
              alt="Logo Facebook"
            />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
