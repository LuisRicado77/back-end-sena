import { ERROR_MESSAGE } from "./Messages";

export class GetError extends Error{
    constructor(mesage?:string){
        super(ERROR_MESSAGE.NOT_GET);
        this.name = "NotGet"
    }
}