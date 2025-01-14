
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize";


class rol extends Model{

}

rol.init(
  {
    idRol:{
      type: DataTypes.NUMBER
    },
    name:{
      type:DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: "rol"
  }
)






