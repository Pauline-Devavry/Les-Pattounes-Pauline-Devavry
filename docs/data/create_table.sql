CREATE TABLE CHAT (
    chat_id SERIAL PRIMARY KEY,
    prénom VARCHAR(50) NOT NULL,
    âge INTEGER,
    description TEXT,
    statut_adoption ENUM('Disponible', 'Adopté', 'Réservé') NOT NULL DEFAULT 'Disponible'
);
