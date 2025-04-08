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
exports.FavoritesModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("./user.model");
const property_model_1 = require("./property.model");
let FavoritesModel = class FavoritesModel extends sequelize_typescript_1.Model {
};
exports.FavoritesModel = FavoritesModel;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.UserModel),
    (0, sequelize_typescript_1.Column)({
        onDelete: "CASCADE",
    }),
    __metadata("design:type", Number)
], FavoritesModel.prototype, "idTenant", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => property_model_1.PropertyModel),
    (0, sequelize_typescript_1.Column)({
        onDelete: "CASCADE",
    }),
    __metadata("design:type", Number)
], FavoritesModel.prototype, "idProperty", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        defaultValue: 1
    }),
    __metadata("design:type", Number)
], FavoritesModel.prototype, "isActive", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.UserModel),
    __metadata("design:type", user_model_1.UserModel)
], FavoritesModel.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => property_model_1.PropertyModel),
    __metadata("design:type", property_model_1.PropertyModel)
], FavoritesModel.prototype, "property", void 0);
exports.FavoritesModel = FavoritesModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "favorites",
        timestamps: true,
    })
], FavoritesModel);
