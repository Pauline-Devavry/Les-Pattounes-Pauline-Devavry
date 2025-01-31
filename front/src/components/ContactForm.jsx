import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  // Gérer les changements dans les champs
  const handleChange = (e) => {
    setFormData({
      ...formData, // Copie du tableau
      [e.target.name]: e.target.value, // Mise à jour du champ complété par l'utilisateur
    })
  }

  // Gérer l'envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault() // Empêche le rechargement de toute la page

    // Envoie des données au back-end via la méthod POST
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json() // Récupère les données de la réponse
        console.log('Réponse du serveur :', data) // Tu peux afficher ou traiter ces données
        toast('Votre message a été envoyé avec succès !', {
          theme: 'light',
          type: 'success',
        })
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      } else {
        const errorData = await response.json()
        console.error('Erreur du serveur :', errorData)
        toast('Une erreur est survenue. Veuillez réessayer.', {
          theme: 'light',
          type: 'error',
        })
      }
    } catch (error) {
      toast('Impossible de contacter le serveur. Vérifiez votre connexion.', {
        theme: 'light',
        type: 'error',
      })
      console.error('Erreur :', error)
    }

    //console.log("Données du formulaire :", formData);
  }

  return (
    <div className="max-w-lg w-full mx-auto">
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Votre nom"
        value={formData.name}
        onChange={handleChange}
        required
        className="outline-none w-full border-b-2 border-gray-300 focus:border-blue-400 p-2 transition"
      />
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        value={formData.email}
        onChange={handleChange}
        required
        className="outline-none w-full border-b-2 border-gray-300 focus:border-blue-400 p-2 transition"
      />
      <input
        type="text"
        name="subject"
        placeholder="Sujet"
        value={formData.subject}
        onChange={handleChange}
        required
        className="outline-none w-full border-b-2 border-gray-300 focus:border-blue-400 p-2 transition"
      />
      <textarea
        name="message"
        placeholder="Votre message"
        value={formData.message}
        onChange={handleChange}
        required
        className="outline-none w-full border-b-2 border-gray-300 focus:border-blue-400 p-2 transition"
        rows="4"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-blue-400 text-white p-3 rounded-md transition duration-200 hover:bg-blue-600 active:scale-95"
      >
        Envoyer
      </button>
    </form>



      {/*    Conteneur Toastify */}
      <ToastContainer />
    </div>
  )
}

export default ContactForm
