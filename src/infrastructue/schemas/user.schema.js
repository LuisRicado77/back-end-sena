"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchemaLogin = exports.userSchemaUpdate = exports.userSchemaCreate = void 0;
const joi_1 = __importDefault(require("joi"));
const names = joi_1.default.string();
const lastNames = joi_1.default.string();
const password = joi_1.default.string();
const email = joi_1.default.string();
const phone = joi_1.default.string();
const address = joi_1.default.string();
const city = joi_1.default.string();
const state = joi_1.default.string();
const idRol = joi_1.default.number();
exports.userSchemaCreate = joi_1.default.object({
    names: names.required(),
    lastNames: lastNames.required(),
    password: password.required(),
    email: email.required(),
    phone: phone.required(),
    address: address.required(),
    city: city.required(),
    state: state.required(),
    idRol: idRol.required(),
});
exports.userSchemaUpdate = joi_1.default.object({
    names: names,
    lastNames: lastNames,
    password: password,
    email: email,
    phone: phone,
    address: address,
    city: city,
    state: state,
    idRol: idRol.optional(),
});
exports.userSchemaLogin = joi_1.default.object({
    email: email.required(),
    password: password.required(),
});
