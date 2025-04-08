import { ERROR_MESSAGE } from "./Messages";

export class NotSendNotificationError extends Error{
    constructor(mesage?:string){
        super(ERROR_MESSAGE.NOT_SEND_NOTIFICATION_ERROR);
        this.name = "Not Send Notification Error"
    }
}