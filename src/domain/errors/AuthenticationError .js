"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationError = void 0;
const Messages_1 = require("./Messages");
class AuthenticationError extends Error {
    constructor(message) {
        super(Messages_1.ERROR_MESSAGE.AUTHENTICATION_ERROR);
        this.name = "AuthenticationError";
    }
}
exports.AuthenticationError = AuthenticationError;
