"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteError = void 0;
const Messages_1 = require("./Messages");
class DeleteError extends Error {
    constructor(mesage) {
        super(Messages_1.ERROR_MESSAGE.NOT_DELETED);
        this.name = "NotDeleted";
    }
}
exports.DeleteError = DeleteError;
