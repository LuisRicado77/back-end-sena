import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize";

export class TestModel extends Model {}
TestModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "TestModel",
    tableName: "test_models",
  }
);
