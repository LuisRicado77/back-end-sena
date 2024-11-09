import { ERROR_MESSAGE } from "./Messages";

export class SavedError extends Error{
    constructor(mesage?:string){
        super(ERROR_MESSAGE.NOT_SAVED);
        this.name = "NotSaved"
    }
}