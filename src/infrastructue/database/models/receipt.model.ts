import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize";


class receipt extends Model{}


receipt.init(
    {
        idReceipt: {
            type: DataTypes.NUMBER
        },
        issueDate: {
            type: DataTypes.DATE
        },
        amountReceived:{
            type: DataTypes.DECIMAL
        }
    },
    {
        sequelize,
        modelName: "receipt"
    }
)