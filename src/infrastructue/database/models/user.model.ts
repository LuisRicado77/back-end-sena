
import { Table,Column, Model,HasMany, DataType } from "sequelize-typescript";
import { Rol } from "./rol.model";
import { Review } from "./review.model";
import { Receipt } from "./receipt.model";
import { Contract } from "./contract.model";
import { Payment } from "./payment.model";
import { Property } from "./property.model";
import { Rental } from "./rental.model";
import { Col } from "sequelize/types/utils";


@Table({
  tableName: "users",
  timestamps: true
})
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    onDelete: "CASCADE", onUpdate: "CASCADE"
  })
  idUser!: number;


  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name!:string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  lastNames!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password!: string;

   @Column({
    type: DataType.STRING,
    allowNull: false
   })
   email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  phone!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  address!:string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  city!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  estate!: string;

  @Column({
    type: DataType.INTEGER,
  },) 
  isActive!: number
  
}


