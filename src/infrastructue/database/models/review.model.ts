import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";


class review extends Model{

}



review.init(
    {
        idReview:{
            type: DataTypes.NUMBER
        },
        content:{
            type:DataTypes.STRING
        },
        rating: {
            type:DataTypes.NUMBER
        },
        date: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        modelName: "review"
    }
)