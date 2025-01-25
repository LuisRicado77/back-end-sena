
import { Table,Column, Model,HasMany, DataType } from "sequelize-typescript";

@Table({
  tableName: 'contracts',
  timestamps:true
 })
export class Contract extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    onDelete: "CASCADE", onUpdate: "CASCADE"
  },) 
  idContract!: number;

  @Column( {
    type: DataType.DATE,
    allowNull: false,
  },)
  startDate!: Date;

  @Column({
    type: DataType.DATE,
  }) 
  endDate!: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  },) 
  typeContract!:string;

  @Column({
    type: DataType.FLOAT(50),
    allowNull: false,
  },) 
  contractAmount!: number;

  @Column(
    {
      type: DataType.TEXT,
    },
  )
  status!:string;

  @Column( {
    type: DataType.INTEGER,
  },)
  isActive!: string;
  
}
