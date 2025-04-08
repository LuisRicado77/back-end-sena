"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
const Messages_1 = require("./Messages");
class ValidationError extends Error {
    constructor(mesage) {
        super(Messages_1.ERROR_MESSAGE.VALIDATION_ERROR);
        this.name = "ValidationError";
    }
}
exports.ValidationError = ValidationError;
