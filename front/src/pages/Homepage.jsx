import React, { useState, useEffect } from 'react'
import CatsList from '../components/CatsList'
import CatCard from '../components/CatCard'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <div className="bg-backgroundColor">
      <Header />
      <div className="text-h1TextColor font-bold text-5xl font-montserrat text-center py-14">
        <h1>Les Pattounes du Coeur</h1>
      </div>

      <div>
        <section>
          <h2 className="text-h2TextColor text-start font-bold text-lg font-montserrat py-6">
            Qui sommes nous ?
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </section>
      </div>

      <h1 className="text-h2TextColor text-center font-bold text-lg font-montserrat py-6">
        Nos chats à l'adoption
      </h1>
      <CatsList limit={6} />

      <div>
        <section>
          <h2 className="font-montserrat text-center font-bold">
            + de 120 adoptions + de 80 bénévoles
          </h2>
        </section>
      </div>

      <div>
        <section>
          <h2 className="text-h2TextColor text-start font-bold text-lg font-montserrat py-6">
            Pourquoi adopter ?
          </h2>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default Homepage
