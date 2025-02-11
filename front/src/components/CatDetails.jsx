import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import CatDetailsCard from './CatDetailsCard'

function CatDetails() {
    const { id } = useParams();  // Récupérer l'id du chat depuis l'URL
    const [cat, setCat] = useState(null);  // On va stocker les détails du chat ici
  
    useEffect(() => {
      // On fait une requête pour récupérer les détails du chat avec cet id
      fetch(`/api/cats/${id}`)
        .then((response) => response.json())
        .then((data) => setCat(data))  // On met les données du chat dans l'état
        .catch((error) =>
          console.error('Erreur lors de la récupération des détails du chat:', error)
        );
    }, [id]);  // On relance l'effet si l'id change
  
    if (!cat) {
      return <div>Chargement...</div>;  // Afficher un message de chargement tant qu'on n'a pas les données
    }
  
    return (
      <div>
        {/* Passer l'objet complet 'cat' à notre composant enfant */}
        <CatDetailsCard cat={cat} />
      </div>
    );
  }
  
  export default CatDetails;