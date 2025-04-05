"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const contract_model_1 = require("./models/contract.model");
const review_model_1 = require("./models/review.model");
const rol_model_1 = require("./models/rol.model");
const rental_model_1 = require("./models/rental.model");
const receipt_model_1 = require("./models/receipt.model");
const property_model_1 = require("./models/property.model");
const payment_model_1 = require("./models/payment.model");
const user_model_1 = require("./models/user.model");
const favorites_model_1 = require("./models/favorites.model");
const application_model_1 = require("./models/application.model");
const sequelize = new sequelize_typescript_1.Sequelize({
    host: 'projectsena.mysql.database.azure.com',
    port: 3306,
    database: 'senabd',
    dialect: 'mysql',
    username: 'luis',
    password: '3015916341Ricardo.', // ⚠ No es seguro dejar la contraseña en el código, usa variables de entorno
    models: [
        application_model_1.ApplicationModel, user_model_1.UserModel, contract_model_1.ContractModel, receipt_model_1.ReceiptModel,
        rol_model_1.RolModel, rental_model_1.RentalModel, property_model_1.PropertyModel, payment_model_1.PaymentModel,
        favorites_model_1.FavoritesModel, review_model_1.ReviewModel
    ],
    logging: console.log,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});
exports.default = sequelize;
