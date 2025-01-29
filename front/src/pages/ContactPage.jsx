import React, { useState, useEffect } from 'react'
import ContactForm from '../components/ContactForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ContactPage() {
  return (
    <div>
      <Header />

      {/* TITRE H1 */}
      <div className="container mx-auto px-4">
        <div className="text-h1TextColor font-bold text-5xl font-montserrat text-center py-14 md:pb-28">
          <h1>Vous souhaitez nous contacter ?</h1>
        </div>
      </div>

      {/* FORMULAIRE */}
      <div className='container mx-auto px-4 pb-32'>
        <ContactForm />
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default ContactPage
