import React, { useState, useEffect } from 'react'

function CatsList() {
  const [chats, setChats] = useState([])

  useEffect(() => {
    fetch('/api/cats')
      .then((response) => response.json()) // Récupère la réponse sous forme de JSON
      .then((data) => setChats(data)) // Stocke les chats dans l'état
      .catch((error) =>
        console.error('Erreur lors de la récupération des chats:', error),
      )
  }, []) // L'effet se lance uniquement au chargement du composant

  return (
    <div>
      <h2>Liste des Chats</h2>
       <ul>
        {chats.map((cat) => (
          <li key={cat.id}>
            {cat.name} - {cat.age} ans
            {cat.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CatsList
