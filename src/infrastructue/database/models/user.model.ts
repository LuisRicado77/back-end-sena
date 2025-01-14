import {Sequelize, Model, DataTypes } from "sequelize";
import { sequelize } from '../sequelize';

class User extends Model{}


User.init(
    {
        idUser:{
            type: DataTypes.NUMBER,
            allowNull: false,
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
        }


        
    },
    {
        sequelize,
        modelName: "User"
    }

)



