import { ERROR_MESSAGE } from "./Messages";

export class NotRequestFoundError extends Error{
    constructor(mesage?:string){
        super(ERROR_MESSAGE.NOT_REQUEST_FOUND_ERROR);
        this.name = "Not Request Found Error"
    }
}