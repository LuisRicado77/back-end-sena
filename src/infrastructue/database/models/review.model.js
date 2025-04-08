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
exports.ReviewModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const property_model_1 = require("./property.model");
const user_model_1 = require("./user.model");
let ReviewModel = class ReviewModel extends sequelize_typescript_1.Model {
};
exports.ReviewModel = ReviewModel;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        onDelete: "CASCADE", onUpdate: "CASCADE"
    }),
    __metadata("design:type", Number)
], ReviewModel.prototype, "idReview", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    }),
    __metadata("design:type", String)
], ReviewModel.prototype, "content", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false
    }),
    __metadata("design:type", Date)
], ReviewModel.prototype, "date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    }),
    __metadata("design:type", Number)
], ReviewModel.prototype, "rating", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false
    }),
    __metadata("design:type", String)
], ReviewModel.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: 1
    }),
    __metadata("design:type", Number)
], ReviewModel.prototype, "isActive", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => property_model_1.PropertyModel),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ReviewModel.prototype, "idProperty", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.UserModel),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ReviewModel.prototype, "idLessor", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => property_model_1.PropertyModel),
    __metadata("design:type", property_model_1.PropertyModel)
], ReviewModel.prototype, "property", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.UserModel),
    __metadata("design:type", user_model_1.UserModel)
], ReviewModel.prototype, "user", void 0);
exports.ReviewModel = ReviewModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: "reviews"
    })
], ReviewModel);
