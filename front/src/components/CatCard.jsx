import React, { useState, useEffect } from 'react'
import imageCardCat from '../images/img-chat.jpg'

function CatCard({ name, age, description }) {

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 transform hover:scale-110 transition duration-200 ease-in-out">
      <img className='w-full h-72 object-cover mx-auto border-[8px] border-cardColor rounded-xl' src={imageCardCat} alt="image chat" />
      <h3 className=" text-center text-red-950 font-bold">
        {name} - {age} ans
      </h3>
      {/* <p>{description}</p> */}
    </div>
  )
}

export default CatCard
