import React, { useState, useEffect } from 'react'
import CatsList from '../components/CatsList';
import CatCard from '../components/CatCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Homepage() {

  return (
    <div className="bg-backgroundColor">
      <Header/>
      <CatsList limit={6} />
      <Footer />
    </div>
  )
}

export default Homepage
