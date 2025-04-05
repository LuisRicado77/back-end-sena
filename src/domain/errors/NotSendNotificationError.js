"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotSendNotificationError = void 0;
const Messages_1 = require("./Messages");
class NotSendNotificationError extends Error {
    constructor(mesage) {
        super(Messages_1.ERROR_MESSAGE.NOT_SEND_NOTIFICATION_ERROR);
        this.name = "Not Send Notification Error";
    }
}
exports.NotSendNotificationError = NotSendNotificationError;
