import React, { useState, useEffect } from 'react'
import logoPattounes from "../images/blacklogo.png"
import logoFacebook from "../images/facebook.png"


function Header() {
    return(
        <header>
        <div className='flex mx-1 my-7'>
          <div className='w-2/6'> 
          <img className="w-28"src={logoPattounes} alt="Logo Pattounes"/>
          </div>
  
          <nav className='w-6/12 text-textMenuColor font-bold content-center'> 
            <ul className="flex justify-end">
              <li className='px-4'><a href="/">Accueil</a></li>
              <li className='px-4'><a href="/cats">Chats à l'adoption</a></li>
              <li className='px-4'><a href="/contact">Nous aider</a></li>
              <li className='px-4'><a href="/contact">Contact</a></li>
            </ul>
          </nav>
  
          <div className='hidden'>
            <button aria-label="Ouvrir le menu">
              <span>☰</span>
            </button>
          </div>
          
          <div className='w-1/12 ps-12 content-center'> 
          <img className='w-16' src={logoFacebook} alt="Logo Facebook"/>
          </div>

        </div>
      </header>

    )
}

export default Header;