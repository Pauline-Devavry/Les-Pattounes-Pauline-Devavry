import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Gérer les changements dans les champs
  const handleChange = (e) => {
    setFormData({
      ...formData, // Copie du tableau
      [e.target.name]: e.target.value, // Mise à jour du champ complété par l'utilisateur
    });
  };

  // Gérer l'envoi du formulaire (pour l'instant, juste un log)
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de toute la page

  // Envoie des données au back-end via POST
  fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData), // Envoie les données du formulaire
  })
    .then((response) => response.json())
    .then((data) => {
      // Gère la réponse, comme afficher un message de succès
      console.log('Réponse du serveur :', data);
    })
    .catch((error) => {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
    });

    //console.log("Données du formulaire :", formData);
  };

  return (
    <div>
      <h2>Contactez-nous</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded shadow">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="subject"
          placeholder="Sujet"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        ></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
