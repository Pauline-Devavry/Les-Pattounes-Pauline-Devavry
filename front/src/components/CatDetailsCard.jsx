import React, { useState, useEffect } from 'react'
import imageCardCat from '../images/img-chat.jpg'
import Button from './Button'

function CatDetailsCard({ cat }) {

  return (
<div className="flex flex-col bg-white shadow-xl border border-gray-300 rounded-lg my-6 w-[400px] h-[550px]">
  <div className="m-2.5 overflow-hidden rounded-md h-96 flex justify-center items-center bg-blue-50">
    <img className="w-full h-full object-cover" src={imageCardCat} alt="photo chat" />
  </div>
  <div className="p-6 text-center flex flex-col justify-between h-full">
    <h1 className="mb-2 text-3xl font-bold text-blue-600">
      {cat.name}
    </h1>
    <p className="text-sm font-semibold text-gray-600 uppercase">
      Âge : {cat.age} ans
    </p>
    <p className="text-base text-gray-700 mt-4 font-light leading-relaxed">
      {cat.description}
    </p>
    <div className="flex justify-center p-6 pt-2 gap-7 mt-auto">
    <Button text="Nous contacter" to="/contact" />
    </div>
  </div>
</div>




  )
}

export default CatDetailsCard