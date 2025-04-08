"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const rol_model_1 = require("./rol.model");
const review_model_1 = require("./review.model");
const receipt_model_1 = require("./receipt.model");
const contract_model_1 = require("./contract.model");
const payment_model_1 = require("./payment.model");
const property_model_1 = require("./property.model");
const rental_model_1 = require("./rental.model");
const application_model_1 = require("./application.model");
const favorites_model_1 = require("./favorites.model");
let UserModel = class UserModel extends sequelize_typescript_1.Model {
};
exports.UserModel = UserModel;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Number)
], UserModel.prototype, "idUser", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], UserModel.prototype, "names", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], UserModel.prototype, "lastNames", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], UserModel.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], UserModel.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], UserModel.prototype, "phone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], UserModel.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], UserModel.prototype, "city", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], UserModel.prototype, "state", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: 1,
    }),
    __metadata("design:type", Number)
], UserModel.prototype, "isActive", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => rol_model_1.RolModel) // Define la clave foránea
    ,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], UserModel.prototype, "idRol", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => rol_model_1.RolModel),
    __metadata("design:type", rol_model_1.RolModel)
], UserModel.prototype, "rol", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => property_model_1.PropertyModel),
    __metadata("design:type", Array)
], UserModel.prototype, "rentedProperties", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => payment_model_1.PaymentModel),
    __metadata("design:type", Array)
], UserModel.prototype, "payments", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => contract_model_1.ContractModel),
    __metadata("design:type", Array)
], UserModel.prototype, "contracts", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => receipt_model_1.ReceiptModel),
    __metadata("design:type", Array)
], UserModel.prototype, "receipts", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => rental_model_1.RentalModel),
    __metadata("design:type", Array)
], UserModel.prototype, "rentals", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => application_model_1.ApplicationModel),
    __metadata("design:type", Array)
], UserModel.prototype, "applications", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => review_model_1.ReviewModel),
    __metadata("design:type", Array)
], UserModel.prototype, "reviews", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => property_model_1.PropertyModel, () => favorites_model_1.FavoritesModel),
    __metadata("design:type", Array)
], UserModel.prototype, "properties", void 0);
exports.UserModel = UserModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "users",
        timestamps: true,
    })
], UserModel);
