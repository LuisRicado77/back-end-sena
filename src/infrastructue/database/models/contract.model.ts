import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize";

class Contract extends Model{}


Contract.init(
    {
        idContract: {
            type: DataTypes.NUMBER
        },
        startDate: {
            type: DataTypes.DATE
        },
        endDate: {
            type: DataTypes.DATE
        },
        typeContract: {
            type: DataTypes.STRING
        },
        contractAmount: {
            type: DataTypes.DECIMAL
        },
        status: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: 'contract'
    }

)