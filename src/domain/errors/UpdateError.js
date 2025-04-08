"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateError = void 0;
const Messages_1 = require("./Messages");
class UpdateError extends Error {
    constructor(mesage) {
        super(Messages_1.ERROR_MESSAGE.NOT_DELETED);
        this.name = "NotUpdate";
    }
}
exports.UpdateError = UpdateError;
