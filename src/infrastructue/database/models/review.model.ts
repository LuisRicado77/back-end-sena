import { DataType, Model, Sequelize , Table,Column, AutoIncrement, ForeignKey, BelongsTo, Index} from "sequelize-typescript";
import { PropertyModel } from './property.model';
import { UserModel } from "./user.model";

@Table({
    timestamps:false,
    tableName: "reviews"
})
export class ReviewModel extends Model{
    
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement: true,
        onDelete: "CASCADE", onUpdate: "CASCADE"
    },)
    idReview!: number


    @Column({
        type:DataType.STRING,
        allowNull:false
    },)
    content!:string


    @Column( {
        type:DataType.DATE,
        allowNull:false
    },)
    date!:Date


   
    @Column({
        type: DataType.INTEGER,
        allowNull:false
    },) 
    rating!:number

    
    @Column( {
        type: DataType.TEXT,
        allowNull:false
    },)
    status!:string


    @Column({
        type: DataType.INTEGER,
        defaultValue: 1
    })
    isActive!: number


    @ForeignKey(() => PropertyModel)
    @Column
    idProperty!: number


    @ForeignKey(() => UserModel)
    @Column
    idLessor!: number


    @BelongsTo(() => PropertyModel)
    property!: PropertyModel


    @BelongsTo(() => UserModel)
    user!:UserModel
}



