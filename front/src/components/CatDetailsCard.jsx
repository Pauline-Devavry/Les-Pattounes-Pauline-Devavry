import React, { useState, useEffect } from 'react'
import imageCardCat from '../images/img-chat.jpg'

function CatDetailsCard({ cat }) {

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <img src={imageCardCat} alt="image chat" className="w-full h-64 object-cover rounded-md" />
      <h2 className="text-2xl font-bold mt-4">{cat.name}</h2>
      <p className="text-gray-700 mt-2">Âge : {cat.age} ans</p>
      <p className="text-gray-600 mt-2">{cat.description}</p>
    </div>
  )
}

export default CatDetailsCard