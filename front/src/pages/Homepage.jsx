import React, { useState, useEffect } from 'react'
import CatsList from '../components/CatsList';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Homepage() {

  return (
    <div className="bg-backgroundColor">
      <Header/>
      <CatsList />
      <Footer />
    </div>
  )
}

export default Homepage
