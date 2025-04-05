
import { Table,Column, Model,HasMany, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { PropertyModel } from "./property.model";
import { UserModel } from "./user.model";
@Table({
    timestamps: true,
    tableName: "rentals"
})
export class RentalModel extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull:false,
        onDelete: "CASCADE", onUpdate: "CASCADE"
    },)
    idRental!: number

    @Column({
        type:DataType.STRING,
        allowNull:false
    },)
    status!: string

    @Column({
        type: DataType.INTEGER,
        defaultValue: 1
    })
    isActive!: number

    @ForeignKey(() => PropertyModel)
    @Column
    idProperty!: number

    @ForeignKey(() => UserModel)
    @Column
    idLessor!: number


    @BelongsTo(() => PropertyModel)
    property!: PropertyModel


    @BelongsTo(() => UserModel)
    user!:UserModel

}




