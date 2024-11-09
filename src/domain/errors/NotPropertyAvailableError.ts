import { ERROR_MESSAGE } from "./Messages";

export class NotPropertyAvailableError extends Error{
    constructor(mesage?:string){
        super(ERROR_MESSAGE.NOT_PROPERTY_AVAILABLE_ERROR);
        this.name = "Not Property Available Error"
    }
}