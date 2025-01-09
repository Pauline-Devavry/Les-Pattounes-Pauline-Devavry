import React, { useState, useEffect } from 'react'

function CatsList() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    fetch('/api/cats')
      .then((response) => response.json()) // Récupère la réponse sous forme de JSON
      .then((data) => setCats(data)) // Stocke les chats dans l'état
      .catch((error) =>
        console.error('Erreur lors de la récupération des chats:', error),
      )
  }, []) // L'effet se lance uniquement au chargement du composant

  return (
    <div>
      <h2>Liste des Chats</h2>
       <div className='flex flex-wrap'>
        {cats.map((cat) => (
          <div className='w-1/6' key={cat.id}>
            <h3 className='text-sky-400 font-bold'>{cat.name} - {cat.age} ans</h3>
            <p>{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CatsList
