import React, { useState, useEffect } from 'react'
import imageCardCat from '../images/img-chat.jpg'

function CatCard({ name, age, description }) {

  return (
    <div className="w-1/3 p-10">
      <img className='w-44 h-44 object-cover mx-auto border-8 border-cardColor' src={imageCardCat} alt="image chat" />
      <h3 className=" text-center text-red-950 font-bold">
        {name} - {age} ans
      </h3>
      {/* <p>{description}</p> */}
    </div>
  )
}

export default CatCard
