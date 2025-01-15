import React, { useState, useEffect } from 'react'
import imageCardCat from '../images/img-chat.jpg'

function CatCard({ name, age, description }) {

  return (
    <div className="w-1/3 p-10 transform hover:scale-110 transition duration-200 ease-in-out">
      <img className='w-48 h-48 object-cover mx-auto border-[11px] border-cardColor' src={imageCardCat} alt="image chat" />
      <h3 className=" text-center text-red-950 font-bold">
        {name} - {age} ans
      </h3>
      {/* <p>{description}</p> */}
    </div>
  )
}

export default CatCard
