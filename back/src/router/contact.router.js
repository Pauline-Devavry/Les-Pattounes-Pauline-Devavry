import { Router } from "express";

const router = Router();

// Route POST pour le formulaire de contact
router.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
  
    // Logique pour traiter les données du formulaire de contact
    console.log('Données reçues :', { name, email, subject, message });
  
    // Réponse au client
    res.status(200).json({ message: 'Message envoyé avec succès !' });
  });

export default router