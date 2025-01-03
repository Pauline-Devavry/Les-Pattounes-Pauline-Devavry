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
  
      image_url: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
  
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'category', 
          key: 'id', 
        },
      },
    },
    {
      sequelize: sequelize(),
      tableName: "attraction",
    }
  );