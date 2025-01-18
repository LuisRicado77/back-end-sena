import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";
import { User } from "./user.model";
import { Property } from "./property.model";

export class Rental extends Model{


}


Rental.init(
    {
        idRental:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull:false
        },
        status:{
            type:DataTypes.STRING,
            allowNull:false
        },
        isActive:{
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        modelName: "Rental",
        tableName: 'rentals',
        timestamps: true
    }
)

Rental.belongsTo(User),
Rental.belongsTo(Property)//listo listo