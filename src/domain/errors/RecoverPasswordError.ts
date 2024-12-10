import { ERROR_MESSAGE } from "./Messages";

export class RecoverPasswordError extends Error{
    constructor(mesage?:string){
        super(ERROR_MESSAGE.NOT_RECOVERY_PASSWORD_ERROR);
        this.name = "Recovery Password Error"
    }
}