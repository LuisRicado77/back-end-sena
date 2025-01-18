import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize";
import { PrimaryKey } from "sequelize-typescript";
import { User } from "./user.model";
import { Payment } from "./payment.model";


export class Receipt extends Model{}


Receipt.init(
    {
        idReceipt: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull:false
        },
        issueDate: {
            type: DataTypes.DATE,
            allowNull:false
        },
        amountReceived:{
            type: DataTypes.FLOAT(50),
            allowNull:false
        },
        isActive:{
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        modelName: "receipt",
        tableName: 'receipts',
        timestamps: true
    }
)
Receipt.belongsTo(User),
Receipt.belongsTo(Payment)//listo listo