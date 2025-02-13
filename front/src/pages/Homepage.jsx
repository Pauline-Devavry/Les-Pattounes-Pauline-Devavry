import React, { useState, useEffect } from 'react'
import CatsList from '../components/CatsList'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ImageCatBlack from '../images/chat-noir-accueil.png'
import ImageBenevolesNumber from '../images/benevole.png'
import ImageAdoptionsNumber from '../images/chat.png'
import ImageReproduction from '../images/Graphique_reproduction-ok.jpg'
import Button from '../components/Button'
import TopButton from '../components/TopButton'

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
              <Button text="Nous contacter" to="/contact" />
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
      <div className="container mx-auto px-4 pb-14">
        <h1 className="text-h2TextColor text-center font-bold text-lg font-montserrat py-6">
          Nos chats à l'adoption
        </h1>
        <CatsList limit={8} />
        <Button text="Voir tous nos chats" to="/chats" />
      </div>

      {/* BLOC QUELQUES CHIFFRES */}
      <section className="py-11 border-2 border-primaryColor bg-transparent">
        <div className="font-montserrat text-center font-bold text-h2TextColor md:flex">
          <div className="md:w-1/2 flex flex-col items-center justify-center">
            <p>+ de 120 adoptions</p>
            <img
              className="mb-7 md:w-32 max-w-28"
              src={ImageBenevolesNumber}
              alt="Image bénévoles"
            />
          </div>
          <div className="md:w-1/2 flex flex-col items-center justify-center">
            <p>+ de 80 bénévoles</p>
            <img
              className="mb-7 md:w-32 max-w-28"
              src={ImageAdoptionsNumber}
              alt="Image adoptions"
            />
          </div>
        </div>
      </section>

      {/* BLOC POURQUOI ADOPTER */}
      <div className="container mx-auto px-4">
        <section className="m-0 pt-14 pb-14">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col justify-center w-full items-center text-center md:w-1/2 md:pr-4 md:items-start md:text-left">
              <h2 className="text-h2TextColor font-bold text-lg font-montserrat mb-6">
                Pourquoi adopter ?
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
              <Button text="Nous aider" to="/nous-aider" />
            </div>
            {/* IMAGE CHAT */}
            <div className="w-full pt-14 flex justify-center md:w-1/2 md:pl-4 md:pt-0">
              <img
                className="max-w-[60%] md:max-w-none"
                src={ImageReproduction}
                alt="Chat noir"
              />
            </div>
          </div>
        </section>
      </div>

      {/* TOP BUTTON */}
      <TopButton />

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default Homepage
