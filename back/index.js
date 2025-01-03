import "dotenv/config"; // Pour charger le fichier .env
import express from 'express';
import { sequelize } from './src/database/client.js'; // Importation de la fonction sequelize
import router from "./src/router/main.router.js";

const app = express();
const port = process.env.PORT || 3000;

// Connexion à la base de données
sequelize().authenticate()  // Vérification de la connexion
  .then(() => {
    console.log("Connexion à la base de données réussie.");
  })
  .catch((err) => {
    console.error("Impossible de se connecter à la base de données :", err);
  });

// Route de base
app.get('/', (req, res) => {
  res.send('Hello les pattounes!');
});

app.use(router);

// Lancer le serveur
app.listen(port, () => {
  console.log(`🚀 API Les Pattounes demarrée à l'adresse : http://localhost:${port}`);
});

