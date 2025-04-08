"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavedError = void 0;
const Messages_1 = require("./Messages");
class SavedError extends Error {
    constructor(mesage) {
        super(Messages_1.ERROR_MESSAGE.NOT_SAVED);
        this.name = "NotSaved";
    }
}
exports.SavedError = SavedError;
