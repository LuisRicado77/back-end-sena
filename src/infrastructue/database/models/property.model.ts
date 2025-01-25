import { Table,Column, Model,HasMany, DataType } from "sequelize-typescript";


@Table({
  tableName: "properties",
  timestamps: true
})
export class Property extends Model {
   
  @Column( {
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    onDelete: "CASCADE", onUpdate: "CASCADE"
  },)
  idProperty!: number

  @Column( {
    type: DataType.STRING,
    allowNull: false,
  },)
  typeProperty!: string

  @Column( {
    type: DataType.STRING,
    allowNull: false,
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
      allowNull: false,
    },
  ) 
  country!: string

  @Column( {
    type: DataType.INTEGER,
    allowNull: false,
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

  @Column( {
    type: DataType.FLOAT,
  },)
  squareMeters!:number
  
  @Column( {
    type: DataType.FLOAT,
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
  foto1!: string

  @Column(
    {
      type: DataType.STRING,
      allowNull: true,
    },
  ) 
  foto2!: string

  @Column({
    type: DataType.STRING,
    allowNull: true,
  },) 
  foto3!: string

  @Column( {
    type: DataType.STRING,
    allowNull: true,
  },)
  foto4!:string
  
  @Column( {
    type: DataType.STRING,
    allowNull: true,
  },)
  foto5!: string

  @Column({
    type: DataType.INTEGER,
  },) 
  isActive!: number
}
 


/*
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
})*/
