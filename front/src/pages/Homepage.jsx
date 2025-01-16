import React, { useState, useEffect } from 'react'
import CatsList from '../components/CatsList'
import CatCard from '../components/CatCard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ImageCatBlack from '../images/chat-noir-accueil.png'

function Homepage() {
  return (
    <div className="bg-backgroundColor font-montserrat">
      <Header />

      <div className="container mx-auto px-4">
        <div className="text-h1TextColor font-bold text-5xl font-montserrat text-center py-14">
          <h1>Les Pattounes du Coeur</h1>
        </div>

        <section className="m-0 p-0">
          <h2 className="text-h2TextColor font-bold text-lg font-montserrat pt-6 text-start mb-6">
            Qui sommes-nous ?
          </h2>

          <div className="flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-x-8 md:space-y-0">
            <div className="w-full md:w-2/4">
              <p className="pb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="pb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="pb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button className="bg-buttonColor mt-6">Nous contacter</button>
            </div>

            <div className="w-full md:w-2/4">
              <img
                className="w-full object-cover"
                src={ImageCatBlack}
                alt="Chat noir"
              />
            </div>
          </div>
        </section>

        <h1 className="text-h2TextColor text-center font-bold text-lg font-montserrat py-6">
          Nos chats à l'adoption
        </h1>
        <CatsList limit={6} />

        <section className="py-6">
          <h2 className="font-montserrat text-center font-bold">
            + de 120 adoptions + de 80 bénévoles
          </h2>
        </section>

        <section className="py-6">
          <h2 className="text-h2TextColor font-bold text-lg font-montserrat">
            Pourquoi adopter ?
          </h2>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default Homepage
