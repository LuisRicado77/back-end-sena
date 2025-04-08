"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcurrencyError = void 0;
class ConcurrencyError extends Error {
    constructor() {
        super("A concurrency conflict occurred.");
        this.name = "ConcurrencyError";
    }
}
exports.ConcurrencyError = ConcurrencyError;
