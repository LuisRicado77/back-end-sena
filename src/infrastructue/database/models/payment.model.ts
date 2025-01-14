import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";


class payment extends Model{
}


payment.init(
    {
        idPayment: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING
        },
        amount: {
            type: DataTypes.DECIMAL
        },
        date: {
            type: DataTypes.DATE
        },
        paymentMethod: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: "payment"
    }
    
)