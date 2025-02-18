import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
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
import { Col } from "sequelize/types/utils";

@Table({
  tableName: "favorites",
  timestamps: true,
})
export class FavoritesModel extends Model {
 
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

  
  @BelongsTo(() => UserModel)
  user!: UserModel;

  @BelongsTo(() => PropertyModel)
  property!: PropertyModel;
}
