-- Création du type ENUM
CREATE TYPE adoption_status_enum AS ENUM ('Disponible', 'Adopté', 'Réservé');

-- Création de la table Cat
CREATE TABLE Cat (
    cat_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INTEGER,
    description TEXT,
    adoption_status adoption_status_enum NOT NULL DEFAULT 'Disponible'
);

