import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";
import { User } from "./user.model";
import { Receipt } from "./receipt.model";


export class Payment extends Model{
}


Payment.init(
    {
        idPayment: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull:false
        },
        status: {
            type: DataTypes.TEXT,
            allowNull:false
        },
        amount: {
            type: DataTypes.DECIMAL,
            allowNull:false
        },
        date: {
            type: DataTypes.DATE,
            allowNull:false
        },
        paymentMethod: {
            type: DataTypes.STRING,
            allowNull:false
        },
        isActive:{
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        modelName: "Payment",
        tableName: 'payments',
        timestamps: true
    }
    
)
Payment.belongsTo(User)//listo listo
Payment.hasMany(Receipt,{
    foreignKey: 'IdPayment'
})