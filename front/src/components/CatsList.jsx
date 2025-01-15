import React, { useState, useEffect } from 'react'
import CatCard from './CatCard'

function CatsList({limit}) {
  const [cats, setCats] = useState([])

  useEffect(() => {
    fetch('/api/cats')
      .then((response) => response.json()) // Récupère la réponse sous forme de JSON
      .then((data) => setCats(data)) // Stocke les chats dans l'état
      .catch((error) =>
        console.error('Erreur lors de la récupération des chats:', error),
      )
  }, []) // L'effet se lance uniquement au chargement du composant

  // Mise en place de la limite d'affichage
  const displayedCats = limit ? cats.slice(0, limit) : cats;

  return (
    <div>
  {/* Liste des Chats */}
       <div className='flex flex-wrap px-56'>
        {displayedCats.map((cat) => (
          <CatCard
          key={cat.id}
          name={cat.name}
          age={cat.age}
          description={cat.description}
        />
        ))}
      </div>
    </div>
  )
}

export default CatsList
