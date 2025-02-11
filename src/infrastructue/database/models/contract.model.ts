import {
  Table,
  Column,
  Model,
  HasMany,
  DataType,
  BelongsTo,
  ForeignKey,
  Default,
} from "sequelize-typescript";
import { PropertyModel } from "./property.model";
import { UserModel } from "./user.model";
@Table({
  tableName: "contracts",
  timestamps: true,
})
export class ContractModel extends Model {
  
  
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  idContract!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  startDate!: Date;

  @Column({
    type: DataType.DATE,
  })
  endDate!: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  typeContract!: string;

  @Column({
    type: DataType.DECIMAL(15, 4),
    allowNull: false,
  })
  contractAmount!: number;

  @Column({
    type: DataType.TEXT,
  })
  status!: string;

  @Column({
    
    type: DataType.INTEGER,
        defaultValue: 1
    
  })
  isActive!: string;

  @ForeignKey(() => PropertyModel)
  @Column
  idProperty!: number;

  @ForeignKey(() => UserModel)
  @Column
  idLessor!: number;

  @BelongsTo(() => PropertyModel)
  property!: PropertyModel;

  @BelongsTo(() => UserModel)
  lessor!: UserModel;
}
