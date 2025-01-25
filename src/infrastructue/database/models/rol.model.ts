import { Model, DataType,Sequelize, Table,Column } from "sequelize-typescript";


@Table({
  timestamps:true,
  tableName: "rols"
})
export class Rol extends Model {
  @Column( {
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
  },) 
  isActive!: number
}
