import { Model, DataType,Sequelize, Table,Column, HasMany, AutoIncrement } from "sequelize-typescript";
import { UserModel } from "./user.model";

@Table({
  timestamps:true,
  tableName: "rols"
})
export class RolModel extends Model {
  
  @Column( {
    autoIncrement: true,
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    onDelete: "CASCADE", onUpdate: "CASCADE"
  },)
  idRol!: number

  @Column( {
    type: DataType.STRING,
    allowNull: false,
  },)
  name!: string
  
  @Column({
    type: DataType.INTEGER,
    defaultValue: 1
  },) 
  isActive!: number

  @HasMany(() => UserModel)
  users!: UserModel[]

}
