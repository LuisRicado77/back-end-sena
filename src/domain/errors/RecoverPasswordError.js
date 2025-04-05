"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoverPasswordError = void 0;
const Messages_1 = require("./Messages");
class RecoverPasswordError extends Error {
    constructor(mesage) {
        super(Messages_1.ERROR_MESSAGE.NOT_RECOVERY_PASSWORD_ERROR);
        this.name = "Recovery Password Error";
    }
}
exports.RecoverPasswordError = RecoverPasswordError;
