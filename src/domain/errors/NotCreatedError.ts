import { ERROR_MESSAGE } from "./Messages";

export class NotCreatedError extends Error{
    constructor(mesage?:string){
        super(ERROR_MESSAGE.NOT_CREATED);
        this.name = "NotCreatedError"
    }
}