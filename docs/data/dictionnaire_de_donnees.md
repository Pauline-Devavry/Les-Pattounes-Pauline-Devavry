# Data Dictionary - Table `Cat`

| **Field Name**       | **Data Type**                         | **Constraints**                   | **Description**                                                |
|-----------------------|---------------------------------------|------------------------------------|----------------------------------------------------------------|
| `cat_id`             | INTEGER                              | PRIMARY KEY, AUTO_INCREMENT       | Unique identifier for each cat.                               |
| `name`               | VARCHAR(50)                         | NOT NULL                          | Name of the cat.                                               |
| `age`                | INTEGER                              | NULLABLE                          | Age of the cat in years (nullable if unknown).                 |
| `description`        | TEXT                                 | NULLABLE                          | Additional information or description about the cat.          |
| `adoption_status`    | ENUM('Disponible', 'Adopté', 'Reservé') | NOT NULL DEFAULT 'Disponible'     | Current adoption status of the cat.                           |

---

## Additional Details:
- **`cat_id`**: Unique, auto-incremented identifier for each cat.
- **`name`**: Mandatory field for identifying the cat.
- **`age`**: Optional field to record the cat's age, allows null if the age is unknown.
- **`description`**: Optional field for providing more details about the cat.
- **`adoption_status`**: Restricted to specific values (`Available`, `Adopted`, `Reserved`) to ensure consistency.

