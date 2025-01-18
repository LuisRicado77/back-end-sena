import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../sequelize';
import { User } from './user.model';
import { Contract } from './contract.model';
import { Rental } from './rental.model';
import { Review } from './review.model';


export class Property extends Model{}


Property.init(
    {
        idProperty: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull:false
        },
        typeProperty: {
            type: DataTypes.STRING,
            allowNull:false
        },
        address: {
            type: DataTypes.STRING,
            allowNull:false
        },
        city: {
            type: DataTypes.STRING,
            allowNull:false
        },
        state: {
            type: DataTypes.STRING,
            allowNull:false
        },
        country: {
            type: DataTypes.STRING,
            allowNull:false
        },
        zipCode: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        numberRooms: {
            type: DataTypes.INTEGER
        },
        numberBathrooms: {
            type: DataTypes.INTEGER
        },
        squareMeters: {
            type: DataTypes.FLOAT
        },
        rentalPrice: {
            type: DataTypes.FLOAT
        },
        status: {
            type: DataTypes.TEXT,
            allowNull:true
        },
        foto1: {
            type: DataTypes.STRING,
            allowNull:true
        },
        foto2: {
            type: DataTypes.STRING,
            allowNull:true
        },
        foto3: {
            type: DataTypes.STRING,
            allowNull:true
        },
        foto4: {
            type: DataTypes.STRING,
            allowNull:true
        },
        foto5: {
            type: DataTypes.STRING,
            allowNull:true
        },
        isActive:{
            type: DataTypes.INTEGER
        }

    },
    {
        sequelize,
        modelName: "Property",
        tableName: 'properties',
        timestamps: true
    }
)


Property.hasMany(User,{
    foreignKey: 'IdTenant'
}),
Property.hasOne(Contract,{
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    foreignKey: 'IdProperty'
});


Property.hasMany(Rental,{
    foreignKey: 'IdProperty'
}),//listo listo
Property.hasMany(Review,{
    foreignKey: 'IdProperty'
})