"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotRequestFoundError = void 0;
const Messages_1 = require("./Messages");
class NotRequestFoundError extends Error {
    constructor(mesage) {
        super(Messages_1.ERROR_MESSAGE.NOT_REQUEST_FOUND_ERROR);
        this.name = "Not Request Found Error";
    }
}
exports.NotRequestFoundError = NotRequestFoundError;
