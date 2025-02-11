import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Model,
  NotNull,
  PrimaryKey,
  Sequelize,
  Table,
} from "sequelize-typescript";
import { UserModel } from "./user.model";
import { PropertyModel } from "./property.model";

@Table({
  tableName: "favorites",
  timestamps: true,
})
export class FavoritesModel extends Model {
  @Column({
    allowNull: false,
    primaryKey: true,
    type: DataType.INTEGER,
    autoIncrement: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  idFavorite!: number;

  @ForeignKey(() => UserModel)
  @Column({
    onDelete: "CASCADE",
  })
  idTenant!: number;

  @ForeignKey(() => PropertyModel)
  @Column({
    onDelete: "CASCADE",
  })
  idProperty!: number;
}
