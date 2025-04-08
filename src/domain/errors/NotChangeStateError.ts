import { ERROR_MESSAGE } from "./Messages";
export class NotChangeStateError extends Error{
    constructor(mesage?:string){
        super(ERROR_MESSAGE.NOT_CHANGE_STATE_ERROR);
        this.name = "NotChangeStateError"
    }
}