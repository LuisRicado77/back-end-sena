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
exports.RolModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("./user.model");
let RolModel = class RolModel extends sequelize_typescript_1.Model {
};
exports.RolModel = RolModel;
__decorate([
    (0, sequelize_typescript_1.Column)({
        autoIncrement: true,
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        onDelete: "CASCADE", onUpdate: "CASCADE"
    }),
    __metadata("design:type", Number)
], RolModel.prototype, "idRol", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], RolModel.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: 1
    }),
    __metadata("design:type", Number)
], RolModel.prototype, "isActive", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => user_model_1.UserModel),
    __metadata("design:type", Array)
], RolModel.prototype, "users", void 0);
exports.RolModel = RolModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: "rols"
    })
], RolModel);
