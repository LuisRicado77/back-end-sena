"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionRejectError = void 0;
const Messages_1 = require("./Messages");
class PermissionRejectError extends Error {
    constructor(mesage) {
        super(Messages_1.ERROR_MESSAGE.PERMISSION_REJECT_ERROR);
        this.name = "Permission Reject Error";
    }
}
exports.PermissionRejectError = PermissionRejectError;
