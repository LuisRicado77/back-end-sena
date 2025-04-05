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
exports.ReceiptModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const payment_model_1 = require("./payment.model");
const user_model_1 = require("./user.model");
let ReceiptModel = class ReceiptModel extends sequelize_typescript_1.Model {
};
exports.ReceiptModel = ReceiptModel;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Number)
], ReceiptModel.prototype, "idReceipt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], ReceiptModel.prototype, "issueDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(15, 4),
        allowNull: false,
    }),
    __metadata("design:type", Number)
], ReceiptModel.prototype, "amountReceived", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: 1
    }),
    __metadata("design:type", Number)
], ReceiptModel.prototype, "isActive", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => payment_model_1.PaymentModel),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ReceiptModel.prototype, "IdPayment", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.UserModel),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ReceiptModel.prototype, "idLessor", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => payment_model_1.PaymentModel),
    __metadata("design:type", payment_model_1.PaymentModel)
], ReceiptModel.prototype, "payment", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.UserModel),
    __metadata("design:type", user_model_1.UserModel)
], ReceiptModel.prototype, "user", void 0);
exports.ReceiptModel = ReceiptModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "receipts",
        timestamps: true,
    })
], ReceiptModel);
