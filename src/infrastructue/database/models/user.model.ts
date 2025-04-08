import {
  Table,
  Column,
  Model,
  HasMany,
  DataType,
  ForeignKey,
  BelongsTo,
  HasOne,
  Index,
  BelongsToMany,
} from "sequelize-typescript";
import { RolModel } from "./rol.model";
import { ReviewModel } from "./review.model";
import { ReceiptModel } from "./receipt.model";
import { ContractModel } from "./contract.model";
import { PaymentModel } from "./payment.model";
import { PropertyModel } from "./property.model";
import { RentalModel } from "./rental.model";
import { ApplicationModel } from "./application.model";
import { FavoritesModel } from "./favorites.model";


@Table({
  tableName: "users",
  timestamps: true,
})
export class UserModel extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  idUser!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  names!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastNames!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  city!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  state!: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 1,
  })
  isActive!: number;

  @ForeignKey(() => RolModel) // Define la clave foránea
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idRol!: number;

  @BelongsTo(() => RolModel)
  rol!: RolModel;

  @HasMany(() => PropertyModel)
  rentedProperties!: PropertyModel[];

  @HasMany(() => PaymentModel)
  payments!: PaymentModel[];

  @HasMany(() => ContractModel)
  contracts!: ContractModel[];

  @HasMany(() => ReceiptModel)
  receipts!: ReceiptModel[];

  @HasMany(() => RentalModel)
  rentals!: RentalModel[];

  @HasMany(() => ApplicationModel)
  applications!: RentalModel[];

  @HasMany(() => ReviewModel)
  reviews!: ReviewModel[];
  
  @BelongsToMany(() =>PropertyModel,() => FavoritesModel)
  properties!:PropertyModel[];
}
