import { sequelize } from "../sequelize"
import rolModel from "./rol.model" 
import userModel from "./user.model"



export const models = {
    Rol: rolModel(sequelize),
    User: userModel(sequelize),

}