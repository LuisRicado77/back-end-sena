"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidCredentialError = void 0;
const Messages_1 = require("./Messages");
class InvalidCredentialError extends Error {
    constructor(message) {
        super(Messages_1.ERROR_MESSAGE.INVALID_CREDENTIAL_ERROR);
        this.name = "InvalidCredentialError";
    }
}
exports.InvalidCredentialError = InvalidCredentialError;
