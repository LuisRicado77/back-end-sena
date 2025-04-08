import { Sequelize } from "sequelize-typescript";
import fs from "fs"; // Necesario para leer el certificado

import { ContractModel } from "./models/contract.model";
import { ReviewModel } from "./models/review.model";
import { RolModel } from "./models/rol.model";
import { RentalModel } from "./models/rental.model";
import { ReceiptModel } from "./models/receipt.model";
import { PropertyModel } from "./models/property.model";
import { PaymentModel } from "./models/payment.model";
import { UserModel } from "./models/user.model";
import { FavoritesModel } from "./models/favorites.model";
import { ApplicationModel } from "./models/application.model";

const sequelize = new Sequelize({
  host: 'projectsena.mysql.database.azure.com',
  port: 3306,
  database: 'senabd',
  dialect: 'mysql',
  username: 'luis',
  password: '3015916341Ricardo.', // ⚠ No es seguro dejar la contraseña en el código, usa variables de entorno
  models: [
    ApplicationModel, UserModel, ContractModel, ReceiptModel,
    RolModel, RentalModel, PropertyModel, PaymentModel,
    FavoritesModel, ReviewModel
  ],
  logging: console.log,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

export default sequelize;
