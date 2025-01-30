import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import helloAssoLogo from '../images/logo-vectoriel-helloasso.jpg'

function HelpUsPage() {
  return (
    <div className="font-montserrat">
      <Header />

      {/* TITRE H1 */}
      <div className="container mx-auto px-4">
        <div className="text-h1TextColor font-bold text-5xl font-montserrat text-center py-14 md:pb-28">
          <h1>Vous souhaitez nous aider ?</h1>
        </div>
      </div>


      {/* BLOC DEVENIR BÉNÉVOLE*/}
      <div className="container mx-auto px-4 pb-14">
        <section className="m-0 p-0">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col justify-center w-full md:w-full md:pr-4 md:items-start md:text-start">
              <h2 className="text-h2TextColor font-bold text-lg font-montserrat mb-6 text-center md:text-start">
                Devenir bénévole
              </h2>
              <p className="mb-14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Button text="Nous contacter" to="/contact" />
            </div>
          </div>
        </section>
      </div>

      {/* BLOC FAIRE UN DON*/}
      <div className="container mx-auto px-4 pb-14">
        <section className="m-0 p-0">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col justify-center w-full md:w-full md:pr-4 md:items-start md:text-start">
              <h2 className="text-h2TextColor font-bold text-lg font-montserrat mb-6 text-center md:text-start">
                Faire un don
              </h2>
              <p className="mb-14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Button text="Nous contacter" to="/contact" />
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default HelpUsPage
