import {
  Sequelize,
  Table,
  Column,
  Model,
  DataType,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  Unique,
} from "sequelize-typescript";
import { PropertyModel } from "./property.model";
import { UserModel } from "./user.model";

@Table({
  tableName: "applications",
  timestamps: true,
})
export class ApplicationModel extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    primaryKey: true
  })
  idApplication!: number;

  @Column({
    type: DataType.STRING,
    defaultValue: "Pending",
  })
  status!: string

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  dateRequest!: Date;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 1
  })
  isActive!: number;

  @ForeignKey(() => PropertyModel)
  @Column
  idProperty!: number;

  @ForeignKey(() => UserModel)
  @Unique("unique_application")
  @Column
  idTenant!: number;

  @BelongsTo(() => PropertyModel)
  property!: PropertyModel;

  @BelongsTo(() => UserModel)
  user!: UserModel;
}
