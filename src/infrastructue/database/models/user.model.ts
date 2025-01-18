import {Sequelize, Model, DataTypes } from "sequelize";
import { sequelize } from '../sequelize';
import { Rol } from "./rol.model";
import { Review } from "./review.model";
import { Receipt } from "./receipt.model";
import { Contract } from "./contract.model";
import { Payment } from "./payment.model";
import { Property } from "./property.model";
import { Rental } from "./rental.model";

export class User extends Model{}


User.init(
    {
        idUser:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        
        names:{
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastNames:{
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        department: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isActive:{
            type: DataTypes.INTEGER
        }
        
    },
    {
        sequelize,
        modelName: "User",
        tableName: 'users'
    }

)

User.belongsTo(Rol)
User.belongsTo(Property)

User.hasMany(Review,{
    foreignKey: 'IdLessor'
})
User.hasMany(Receipt,{
    foreignKey: 'IdLessor'
})
User.hasMany(Contract,{
    foreignKey: 'IdLessor'
})
User.hasMany(Payment,{
    foreignKey: 'IdLessor'
}
    
)
User.hasMany(Rental,{
    foreignKey: 'IdLessor'
})//listo listo

