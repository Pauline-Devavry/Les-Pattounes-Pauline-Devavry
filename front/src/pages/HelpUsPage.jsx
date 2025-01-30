import React, { useState, useEffect } from 'react'
import CardHelp from '../components/CardHelp'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import DonImg from '../images/logohelloasso.jpg'
import ImageBenevole from '../images/imgbenevole.jpg'

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

      {/* BLOC ADHESION & DON */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-x-8 md:space-y-0 pb-14">
        {/* Card pour "Adhérer à l'asso" */}
        <CardHelp
          title="Adhérer à l'association"
          description="En adhérant à notre association, vous venez en aide aux minous en détresse."
          link="https://www.helloasso.com/associations/les-pattounes-du-coeur/adhesions/adhesion-2025?fbclid=IwY2xjawHeABRleHRuA2FlbQIxMAABHUDDuKfOy4lcclgSOMZOxw5gfUhlMteri9aVlnb_7sG4KK6Bjc1cZciRSQ_aem_Uv6TajP0odVS2p87q9ewbA"
          imageSrc={DonImg}
          buttonText="Adhérer"
        />

        {/* Card pour "Faire un don" */}
        <CardHelp
          title="Faire un don"
          description="Soutenez notre association en faisant un don libre."
          link="https://www.helloasso.com/associations/les-pattounes-du-coeur/formulaires/1"
          imageSrc={DonImg}
          buttonText="Faire un don"
        />
      </div>

      {/* BLOC DEVENIR BÉNÉVOLE*/}
      <div className="container mx-auto px-4">
        <section className="m-0 pt-14 pb-14">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col justify-center w-full items-center text-center md:w-1/2 md:pr-4 md:items-start md:text-start">
              <h2 className="text-h2TextColor font-bold text-lg font-montserrat mb-6">
                Devenir bénévole
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
                className="max-w-[70%] md:max-w-2xl"
                src={ImageBenevole}
                alt="Image bénévolat"
              />
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
