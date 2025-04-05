"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationError = void 0;
class AuthorizationError extends Error {
    constructor() {
        super("You do not have permission to perform this action.");
        this.name = "AuthorizationError";
    }
}
exports.AuthorizationError = AuthorizationError;
