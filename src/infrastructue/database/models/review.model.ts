import { DataType, Model, Sequelize , Table,Column, AutoIncrement} from "sequelize-typescript";


@Table({
    timestamps:true,
    tableName: "reviews"
})
export class Review extends Model{
    
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement: true
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
        type: DataType.INTEGER
    })
    isActive!: number
}



