import { Sequelize } from "sequelize";

// Création de la fonction pour se connecter à PostgreSQL
function sequelize() {
  const connexion = new Sequelize(process.env.PG_URL, { // Utilisation de l'URL de la base de données depuis .env
    dialect: "postgres",  // Indication que l'on utilise PostgreSQL
    define: {
      underscored: true,  // Utilisation de _ pour les noms de colonnes
    },
  });

  return connexion;  // Renvoie l'instance de connexion Sequelize
}

export { sequelize };
