"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotPropertyAvailableError = void 0;
const Messages_1 = require("./Messages");
class NotPropertyAvailableError extends Error {
    constructor(mesage) {
        super(Messages_1.ERROR_MESSAGE.NOT_PROPERTY_AVAILABLE_ERROR);
        this.name = "Not Property Available Error";
    }
}
exports.NotPropertyAvailableError = NotPropertyAvailableError;
