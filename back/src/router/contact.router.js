import "dotenv/config"; 
import { Router } from "express";
import nodemailer from 'nodemailer';

const router = Router();


// Route POST pour le formulaire de contact
router.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;


  try {
    // Création du transporteur pour l'envoi de mails
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Config du mail
    const mailOptions = {
      from: `"${name}" <${email}>"`,
      replyTo: email,
      to: "projetlespattounes@gmail.com",
      subject: subject || 'Contact via le formulaire',
      text: message,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email envoyé avec succès !' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email :', error);
    res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email.' });
  }
});


export default router