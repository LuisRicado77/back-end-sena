"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalDependencyError = void 0;
class ExternalDependencyError extends Error {
    constructor() {
        super("An external service failed to respond.");
        this.name = "ExternalDependencyError";
    }
}
exports.ExternalDependencyError = ExternalDependencyError;
