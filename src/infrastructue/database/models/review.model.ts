import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";
import { User } from "./user.model";
import { Property } from "./property.model";


export class Review extends Model{

}



Review.init(
    {
        idReview:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull:false
        },
        content:{
            type:DataTypes.STRING,
            allowNull:false
        },
        rating: {
            type:DataTypes.NUMBER,
            allowNull:false
        },
        date: {
            type: DataTypes.DATE,
            allowNull:false
        },
        status: {
            type: DataTypes.TEXT,
            allowNull:false
        },
        isActive:{
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        modelName: "Review",
        tableName: 'reviews',
        timestamps: true
    }
)

Review.belongsTo(User),
Review.belongsTo(Property)//listo listo