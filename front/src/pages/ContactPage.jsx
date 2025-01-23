import React, { useState, useEffect } from 'react'
import ContactForm from '../components/ContactForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ContactPage() {
    return(
        <div>
        <Header />
        <ContactForm />
        <Footer />
        </div>
    )
}

export default ContactPage
