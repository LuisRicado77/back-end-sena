import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../sequelize';


class property extends Model{}


property.init(
    {
        idProperty: {
            type: DataTypes.NUMBER
        },
        typeProperty: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.STRING,
        },
        country: {
            type: DataTypes.STRING
        },
        zipCode: {
            type: DataTypes.NUMBER
        },
        numberRooms: {
            type: DataTypes.NUMBER
        },
        numberBathrooms: {
            type: DataTypes.NUMBER
        },
        squareMeters: {
            type: DataTypes.NUMBER
        },
        rentalPrice: {
            type: DataTypes.DECIMAL
        },
        status: {
            type: DataTypes.STRING
        },
        foto1: {
            type: DataTypes.STRING
        },
        foto2: {
            type: DataTypes.STRING
        },
        foto3: {
            type: DataTypes.STRING
        },
        foto4: {
            type: DataTypes.STRING
        },
        foto5: {
            type: DataTypes.STRING
        },

    },
    {
        sequelize,
        modelName: "property"
    }
)
