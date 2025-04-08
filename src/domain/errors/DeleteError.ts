import { ERROR_MESSAGE } from "./Messages";

export class DeleteError extends Error{
    constructor(mesage?:string){
        super(ERROR_MESSAGE.NOT_DELETED);
        this.name = "NotDeleted"
    }
}