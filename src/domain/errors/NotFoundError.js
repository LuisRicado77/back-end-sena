"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const Messages_1 = require("./Messages");
class NotFoundError extends Error {
    constructor(mesage) {
        super(Messages_1.ERROR_MESSAGE.NOT_FOUND);
        this.name = "NotFoundError";
    }
}
exports.NotFoundError = NotFoundError;
