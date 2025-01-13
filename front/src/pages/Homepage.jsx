import React, { useState, useEffect } from 'react'
import CatsList from '../components/CatsList';

function Homepage() {

  return (
    <div className="bg-backgroundColor">
      <h1 className="text-h1TextColor">Les Pattounes du Coeur</h1>
      <h2 className="text-h2TextColor">Qui sommes-nous ?</h2>
      <CatsList />
    </div>
  )
}

export default Homepage
