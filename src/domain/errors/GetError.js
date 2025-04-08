"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetError = void 0;
const Messages_1 = require("./Messages");
class GetError extends Error {
    constructor(mesage) {
        super(Messages_1.ERROR_MESSAGE.NOT_GET);
        this.name = "NotGet";
    }
}
exports.GetError = GetError;
