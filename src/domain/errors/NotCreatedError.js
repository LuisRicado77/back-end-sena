"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotCreatedError = void 0;
const Messages_1 = require("./Messages");
class NotCreatedError extends Error {
    constructor(mesage) {
        super(Messages_1.ERROR_MESSAGE.NOT_CREATED);
        this.name = "NotCreatedError";
    }
}
exports.NotCreatedError = NotCreatedError;
