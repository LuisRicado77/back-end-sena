import { Table,Column, Model,HasMany, DataType } from "sequelize-typescript";

@Table({
    tableName: "receipts",
    timestamps: true
})
export class Receipt extends Model{
    @Column( {
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull:false,
        onDelete: "CASCADE", onUpdate: "CASCADE"
    },)
    idReceipt!: number

    @Column( {
        type: DataType.DATE,
        allowNull:false
    },)
    issueDate!: Date

    @Column({
        type: DataType.FLOAT(50),
        allowNull:false
    },)
    amountReceived!: number

    @Column({
        type: DataType.INTEGER
    })
    isActive!: number
   
}

