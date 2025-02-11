import {
  Table,
  Column,
  Model,
  HasMany,
  DataType,
  ForeignKey,
  BelongsTo,
  AutoIncrement,
} from "sequelize-typescript";
import { PaymentModel } from "./payment.model";
import { UserModel } from "./user.model";
@Table({
  tableName: "receipts",
  timestamps: true,
})
export class ReceiptModel extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  idReceipt!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  issueDate!: Date;

  @Column({
    type: DataType.DECIMAL(15, 4),
    allowNull: false,
  })
  amountReceived!: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 1
  })
  isActive!: number;

  @ForeignKey(() => PaymentModel)
  @Column
  IdPayment!: number;

  @ForeignKey(() => UserModel)
  @Column
  idLessor!: number

  @BelongsTo(() => PaymentModel)
  payment!: PaymentModel;

  @BelongsTo(() => UserModel)
  user!: UserModel



}
