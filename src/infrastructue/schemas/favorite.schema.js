"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoriteSchemaUpdate = exports.favoriteSchemaCreate = void 0;
const joi_1 = __importDefault(require("joi"));
const idFavorite = joi_1.default.string();
const image = joi_1.default.string();
const titleProperty = joi_1.default.string();
const price = joi_1.default.number();
const priceRented = joi_1.default.number();
const isActive = joi_1.default.number();
exports.favoriteSchemaCreate = joi_1.default.object({
    image: joi_1.default.required(),
    titleProperty: joi_1.default.required(),
    price: joi_1.default.optional(),
    priceRented: joi_1.default.optional()
});
exports.favoriteSchemaUpdate = joi_1.default.object({
    image: image,
    titleProperty: titleProperty,
    price: price,
    priceRented: priceRented,
    isActive: isActive
});
