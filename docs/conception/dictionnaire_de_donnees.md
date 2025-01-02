# Dictionnaire de données - Table `CHAT`

| **Nom du champ**  | **Type de données**                      | **Contraintes**                   | **Description**                                                |
|--------------------|------------------------------------------|------------------------------------|----------------------------------------------------------------|
| `chat_id`         | INTEGER                                 | PRIMARY KEY, AUTO_INCREMENT       | Identifiant unique pour chaque chat.                          |
| `prénom`          | VARCHAR(50)                            | NOT NULL                          | Prénom du chat.                                                |
| `âge`             | INTEGER                                 | NULLABLE                          | Âge du chat en années (peut être nul si l'âge est inconnu).    |
| `description`     | TEXT                                    | NULLABLE                          | Description ou informations supplémentaires sur le chat.       |
| `statut_adoption` | ENUM('Disponible', 'Adopté', 'Réservé') | NOT NULL DEFAULT 'Disponible'     | Statut actuel d’adoption du chat.                             |

---

## Détails supplémentaires :
- **`chat_id`** : Identifiant unique, auto-incrémenté.
- **`prénom`** : Champ obligatoire pour identifier le chat.
- **`âge`** : Champ facultatif pour permettre la création même si l'âge est inconnu.
- **`description`** : Détails facultatifs pour enrichir les informations sur le chat.
- **`statut_adoption`** : Restriction des valeurs possibles pour assurer une cohérence.

