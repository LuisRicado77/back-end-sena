"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationSchemaUpdate = exports.applicationSchemaCreate = void 0;
const joi_1 = __importDefault(require("joi"));
const status = joi_1.default.string();
const dateRequest = joi_1.default.date();
const isActive = joi_1.default.number();
const idProperty = joi_1.default.number();
const idTenant = joi_1.default.number();
exports.applicationSchemaCreate = joi_1.default.object({
    status: joi_1.default.required(),
    dateRequest: joi_1.default.required(),
    idProperty: joi_1.default.optional(),
    idTenant: joi_1.default.optional()
});
exports.applicationSchemaUpdate = joi_1.default.object({
    status: status.required()
});
