"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewSchemaUpdate = exports.reviewSchemaCreate = void 0;
const joi_1 = __importDefault(require("joi"));
const idReview = joi_1.default.string();
const content = joi_1.default.string();
const date = joi_1.default.date();
const rating = joi_1.default.number();
const nameUser = joi_1.default.string();
const namePropertyCheck = joi_1.default.string();
const status = joi_1.default.string();
const isActive = joi_1.default.number();
exports.reviewSchemaCreate = joi_1.default.object({
    content: joi_1.default.required(),
    rating: joi_1.default.required(),
    date: joi_1.default.required(),
    nameUser: joi_1.default.required(),
    namePropertyCheck: joi_1.default.required(),
    status: joi_1.default.required()
});
exports.reviewSchemaUpdate = joi_1.default.object({
    content: content,
    date: date,
    rating: rating,
    nameUser: nameUser,
    namePropertyCheck: namePropertyCheck,
    status: status
});
