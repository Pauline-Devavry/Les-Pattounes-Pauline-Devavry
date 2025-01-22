import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Button({ text, to }) {
    return (
      <div>
        <Link to={to}>
          <button className="bg-buttonColor px-2 py-2 rounded-full border border-black text-white font-montserrat font-semibold text-sm hover:bg-opacity-80">
            {text}
          </button>
        </Link>
      </div>
    );
  }

export default Button
