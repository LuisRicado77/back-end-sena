import { ERROR_MESSAGE } from "./Messages";

export class NotFoundError extends Error{
    constructor(mesage?:string){
        super(ERROR_MESSAGE.NOT_FOUND);
        this.name = "NotFoundError"
    }
}