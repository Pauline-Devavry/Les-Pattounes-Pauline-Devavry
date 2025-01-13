import React, { useState, useEffect } from 'react'

function Footer() {

  return (
    <footer>
      <div className="font-montserrat text-sm font-semibold bg-gradient-to-b from-[#4A0D1A] to-[#C02046] text-textButtonColor flex px-4h-48 flex-col py-4 justify-center space-y-3 text-center">
        <div>
          <p className='font-extrabold text-base'>Contact</p>
          <p>06.01.01.01.01</p>
          <p>adresse@mail.com</p>
        </div>
        <div>
          <a href="/mentions-legales">Mentions légales</a>
        </div>
        <div>
          <a href="/cgu">CGU</a>
        </div>
        <div>
          <p>
            &copy; {new Date().getFullYear()} Tous droits réservés | Les
            Pattounes du Coeur
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
