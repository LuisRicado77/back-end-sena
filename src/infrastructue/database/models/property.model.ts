import { Table,Column, Model,HasMany, DataType, HasOne, ForeignKey, BelongsTo, AllowNull, BelongsToMany } from "sequelize-typescript";
import { UserModel } from "./user.model";
import { ContractModel } from "./contract.model";
import { RentalModel } from "./rental.model";
import { ReviewModel } from "./review.model";
import { ApplicationModel } from "./application.model";
import { FavoritesModel } from "./favorites.model";

@Table({
  tableName: "properties",
  timestamps: true
})
export class PropertyModel extends Model {
   
  @Column( {
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    onDelete: "CASCADE", onUpdate: "CASCADE"
  },)
  idProperty!: number

  @Column({
    type: DataType.STRING
  })
  title!: string

  @Column( {
    type: DataType.STRING,
    allowNull: false,
  },)
  typeProperty!: string

  @Column( {
    type: DataType.STRING,
    allowNull: true,
  },)
  description!: string

  @Column( {
    type: DataType.STRING,
    allowNull: true,
  },)
  address!: string

  @Column( {
    type: DataType.STRING,
    allowNull: false,
  },)
  city!: string

  @Column(
    {
      type: DataType.STRING,
      allowNull: false,
    },
  )
  state!: string

  @Column(
    {
      type: DataType.STRING,
      allowNull: true,
    },
  ) 
  country!: string

  @Column( {
    type: DataType.INTEGER,
    allowNull: true,
  },)
  zipCode!: number
  
  @Column( {
    type: DataType.INTEGER,
  },)
  numberRooms!: number

  @Column( {
    type: DataType.INTEGER,
  },)
  numberBathrooms!: number

  @Column({
    type: DataType.STRING,
    allowNull: true
  },)
  squareMeters!:number
  
  @Column( {
    type: DataType.DECIMAL(15, 4),
  },)
  rentalPrice!: number

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  },) 
  status!: string

  @Column( {
    type: DataType.STRING,
    allowNull: true,
  },)
  images!: string

 

  @Column({
    type: DataType.INTEGER,
    defaultValue: 1
  },) 
  isActive!: number
  
  @ForeignKey(() => UserModel)
  @Column
  idLessor!: number

  @BelongsTo(() => UserModel)
  Lessor!: UserModel;   


  @HasOne(() => ContractModel, {  onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  contract!: ContractModel;

  
  @HasMany(() => RentalModel)
  rentals!: RentalModel[];

  @HasMany(() => ApplicationModel)
  applications!: RentalModel[];

  
  @HasMany(() => ReviewModel)
  reviews!: ReviewModel[];

  @BelongsToMany(() => UserModel, () => FavoritesModel)
  users!:User[];
}
 


