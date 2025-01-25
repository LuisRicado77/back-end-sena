import { Sequelize } from "sequelize-typescript";
import { Contract } from "./models/contract.model";
import { Review } from "./models/review.model";
import { Rol } from "./models/rol.model";
import { Rental } from "./models/rental.model";
import { Receipt } from "./models/receipt.model";
import { Property } from "./models/property.model";
import { Payment } from "./models/payment.model";
import { User } from "./models/user.model";

const sequelize = new Sequelize({
  database: 'testsena',
  dialect: 'mysql', // o 'postgres', 'sqlite', etc.
  username: 'root',
  password: '',
  models: [User,Contract,Review, Rol, Rental, Receipt, Property, Payment], 
  logging: console.log
});

export default sequelize;