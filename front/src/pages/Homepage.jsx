import React, { useState, useEffect } from 'react'
import CatsList from '../components/CatsList'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ImageCatBlack from '../images/chat-noir-accueil.png'

function Homepage() {
  return (
    <div className="bg-backgroundColor font-montserrat">
      {/*  HEADER */}
      <Header />

      {/* TITRE H1 */}
      <div className="container mx-auto px-4">
        <div className="text-h1TextColor font-bold text-5xl font-montserrat text-center py-14">
          <h1>Les Pattounes du Coeur</h1>
        </div>
      </div>

      {/* BLOC QUI SOMMES NOUS */}
      <div className="container mx-auto px-4">
        <section className="m-0 p-0">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col justify-center w-full items-center text-center md:w-1/2 md:pr-4 md:items-start md:text-left">
              <h2 className="text-h2TextColor font-bold text-lg font-montserrat mb-6">
                Qui sommes-nous ?
              </h2>
              <p className="mb-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="mb-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="mb-14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button className="bg-buttonColor">Nous contacter</button>
            </div>
            {/* IMAGE CHAT */}
            <div className="w-full pt-14 flex justify-center md:w-1/2 md:pl-4 md:pt-0">
              <img
                className="max-w-[60%] md:max-w-none"
                src={ImageCatBlack}
                alt="Chat noir"
              />
            </div>
          </div>
        </section>
      </div>

      {/* BLOC NOS CHATS A L'ADOPTION */}
      <div className="container mx-auto px-4">
        <h1 className="text-h2TextColor text-center font-bold text-lg font-montserrat py-6">
          Nos chats à l'adoption
        </h1>
        <CatsList limit={6} />
      </div>

      {/* BLOC QUELQUES CHIFFRES */}
      <section className="py-11 border-2 border-primaryColor bg-transparent">
        <div className="font-montserrat text-center font-bold text-h2TextColor">
          <p>+ de 120 adoptions</p>
          <p>+ de 80 bénévoles</p>
        </div>
      </section>

      {/* BLOC POURQUOI ADOPTER */}
      <div className="container mx-auto px-4">
        <section className="py-6">
          <h2 className="text-h2TextColor font-bold text-lg font-montserrat">
            Pourquoi adopter ?
          </h2>
        </section>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default Homepage
