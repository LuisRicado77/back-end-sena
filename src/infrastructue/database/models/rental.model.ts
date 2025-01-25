
import { Table,Column, Model,HasMany, DataType } from "sequelize-typescript";

@Table({
    timestamps: true,
    tableName: "rentals"
})
export class Rental extends Model{
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
        type: DataType.INTEGER
    })
    isActive!: number

}




