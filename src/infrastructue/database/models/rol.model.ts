
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize";
import { User } from "./user.model";


export class Rol extends Model{
  
}

Rol.init(
  {
    idRol:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull:false
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    isActive:{
      type: DataTypes.INTEGER
  }
  },
  {
    sequelize,
    modelName: "Rol",
    tableName: 'rols',
    timestamps: true,
    
  }
)
Rol.hasMany(User,{
  foreignKey: 'IdRol'
})//listo listo








