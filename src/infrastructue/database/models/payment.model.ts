import { Table,Column, Model,HasMany, DataType, Default } from "sequelize-typescript";
import { Col } from "sequelize/types/utils";

@Table({
    tableName: "payments",
    timestamps: true
})
export class Payment extends Model{
  
    @Column( {
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull:false,
        onDelete: "CASCADE", onUpdate: "CASCADE"
    },)
    idPayment!: number
    
    @Column( {
        type: DataType.TEXT,
        allowNull:false
    },)
    status!:string

    @Column({
        type: DataType.DECIMAL,
        allowNull:false
    },) 
    amount!: number    

    @Column(
        {
            type: DataType.DATE,
            allowNull:false
        },
    )
    date!: Date
    
    @Column( {
        type: DataType.STRING,
        allowNull:false
    },)
    paymentMethod!: string

    @Column(
        {
            type: DataType.INTEGER
            
        }
    )
    isActive!:number
}

