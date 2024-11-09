import { ERROR_MESSAGE } from "./Messages";

export class UpdateError extends Error{
    constructor(mesage?:string){
        super(ERROR_MESSAGE.NOT_DELETED);
        this.name = "NotUpdate"
    }
}