"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertySchemaUpdate = exports.propertySchemaCreate = void 0;
const joi_1 = __importDefault(require("joi"));
const title = joi_1.default.string();
const typeProperty = joi_1.default.string();
const address = joi_1.default.string();
const city = joi_1.default.string();
const state = joi_1.default.string();
const country = joi_1.default.string();
const zipCode = joi_1.default.number();
const numberRooms = joi_1.default.number();
const numberBathrooms = joi_1.default.number();
const squareMeters = joi_1.default.string();
const rentalPrice = joi_1.default.number();
const status = joi_1.default.string();
const description = joi_1.default.string();
const idLessor = joi_1.default.number();
const images = joi_1.default.array();
const isActive = joi_1.default.number();
exports.propertySchemaCreate = joi_1.default.object({
    title: joi_1.default.required(),
    typeProperty: joi_1.default.required(),
    address: joi_1.default.required(),
    city: joi_1.default.required(),
    state: joi_1.default.required(),
    country: joi_1.default.optional(),
    zipCode: joi_1.default.optional(),
    numberRooms: joi_1.default.required(),
    numberBathrooms: joi_1.default.required(),
    squareMeters: joi_1.default.optional(),
    rentalPrice: joi_1.default.required(),
    status: joi_1.default.optional(),
    description: joi_1.default.optional(),
    idLessor: joi_1.default.optional(),
    images: joi_1.default.optional(),
    isActive: joi_1.default.optional(),
});
exports.propertySchemaUpdate = joi_1.default.object({
    title: title,
    typeProperty: typeProperty,
    address: address,
    city: city,
    state: state,
    country: country,
    zipCode: zipCode,
    numberRooms: numberRooms,
    numberBathrooms: numberBathrooms,
    squareMeters: squareMeters,
    rentalPrice: rentalPrice,
    status: status.optional(),
    description: description,
    picture1: images.optional(),
    isActive: isActive.optional(),
});
