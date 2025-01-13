import React, { useState, useEffect } from 'react'
import CatsList from '../components/CatsList';
import Header from '../components/Header';

function Homepage() {

  return (
    <div className="bg-backgroundColor">
      <Header/>
      <CatsList />
    </div>
  )
}

export default Homepage
