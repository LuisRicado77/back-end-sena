import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize";
import { User } from "./user.model";
import { Property } from "./property.model";

export class Contract extends Model{}


Contract.init(
    {
        idContract: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull:false
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull:false
        },
        endDate: {
            type: DataTypes.DATE,
        },
        typeContract: {
            type: DataTypes.STRING,
            allowNull:false
        },
        contractAmount: {
            type: DataTypes.FLOAT(50),
            allowNull:false
        },
        status: {
            type: DataTypes.TEXT
        },
        isActive:{
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        modelName: 'Contract',
        tableName: 'contracts',
        timestamps: true
    }

)
Contract.belongsTo(User),
Contract.belongsTo(Property)//listo listo