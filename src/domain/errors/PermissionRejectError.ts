import { ERROR_MESSAGE } from "./Messages";

export class PermissionRejectError extends Error{
    constructor(mesage?:string){
        super(ERROR_MESSAGE.PERMISSION_REJECT_ERROR);
        this.name = "Permission Reject Error"
    }
}