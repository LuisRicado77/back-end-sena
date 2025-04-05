import {
  Table,
  Column,
  Model,
  HasMany,
  DataType,
  Default,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

import { UserModel } from "./user.model";
import { ReceiptModel } from "./receipt.model";

@Table({
  tableName: "payments",
  timestamps: true,
})
export class PaymentModel extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  idPayment!: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  status!: string;

  @Column({
    type: DataType.DECIMAL(15, 4),
    allowNull: false,
  })
  amount!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date!: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  paymentMethod!: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 1
  })
  isActive!: number;

  @ForeignKey(() => UserModel)
  @Column
  idLessor!: number

  @BelongsTo(() => UserModel)
  lessorPayment!: UserModel

  @HasMany(() => ReceiptModel)
  receipts!: ReceiptModel[];
}
