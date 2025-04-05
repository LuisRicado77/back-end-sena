"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotChangeStateError = void 0;
const Messages_1 = require("./Messages");
class NotChangeStateError extends Error {
    constructor(mesage) {
        super(Messages_1.ERROR_MESSAGE.NOT_CHANGE_STATE_ERROR);
        this.name = "NotChangeStateError";
    }
}
exports.NotChangeStateError = NotChangeStateError;
