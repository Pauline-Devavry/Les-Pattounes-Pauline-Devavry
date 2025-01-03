import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/client.js";

export class Cat extends Model {}

Cat.init(
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
  
      age: {
        type: DataTypes.INTEGER,
      },
  
      description: {
        type: DataTypes.TEXT,
      },
  
      adoption_status: {
        type: DataTypes.ENUM('Disponible', 'Adopté', 'Réservé'),
        allowNull: false,
        defaultValue: 'Disponible',
      },
  
      image_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize: sequelize(),
      tableName: "cats",
    }
  );