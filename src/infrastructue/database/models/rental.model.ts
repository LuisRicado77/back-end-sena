import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";

class rental extends Model{


}


rental.init(
    {
        idRental:{
            type: DataTypes.NUMBER
        },
        status:{
            type:DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: "rental"
    }
)