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
exports.PropertyModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("./user.model");
const contract_model_1 = require("./contract.model");
const rental_model_1 = require("./rental.model");
const review_model_1 = require("./review.model");
const application_model_1 = require("./application.model");
const favorites_model_1 = require("./favorites.model");
let PropertyModel = class PropertyModel extends sequelize_typescript_1.Model {
};
exports.PropertyModel = PropertyModel;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        onDelete: "CASCADE", onUpdate: "CASCADE"
    }),
    __metadata("design:type", Number)
], PropertyModel.prototype, "idProperty", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], PropertyModel.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], PropertyModel.prototype, "typeProperty", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], PropertyModel.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], PropertyModel.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], PropertyModel.prototype, "city", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], PropertyModel.prototype, "state", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], PropertyModel.prototype, "country", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], PropertyModel.prototype, "zipCode", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], PropertyModel.prototype, "numberRooms", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], PropertyModel.prototype, "numberBathrooms", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true
    }),
    __metadata("design:type", Number)
], PropertyModel.prototype, "squareMeters", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(15, 2),
    }),
    __metadata("design:type", Number)
], PropertyModel.prototype, "rentalPrice", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    __metadata("design:type", String)
], PropertyModel.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], PropertyModel.prototype, "images", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: 1
    }),
    __metadata("design:type", Number)
], PropertyModel.prototype, "isActive", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.UserModel),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], PropertyModel.prototype, "idLessor", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.UserModel),
    __metadata("design:type", user_model_1.UserModel)
], PropertyModel.prototype, "Lessor", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => contract_model_1.ContractModel, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    __metadata("design:type", contract_model_1.ContractModel)
], PropertyModel.prototype, "contract", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => rental_model_1.RentalModel),
    __metadata("design:type", Array)
], PropertyModel.prototype, "rentals", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => application_model_1.ApplicationModel),
    __metadata("design:type", Array)
], PropertyModel.prototype, "applications", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => review_model_1.ReviewModel),
    __metadata("design:type", Array)
], PropertyModel.prototype, "reviews", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => user_model_1.UserModel, () => favorites_model_1.FavoritesModel),
    __metadata("design:type", Array)
], PropertyModel.prototype, "users", void 0);
exports.PropertyModel = PropertyModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "properties",
        timestamps: true
    })
], PropertyModel);
