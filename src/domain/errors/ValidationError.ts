import { ERROR_MESSAGE } from "./Messages";

export class ValidationError extends Error {
    constructor(mesage?:string){
            super(ERROR_MESSAGE.VALIDATION_ERROR);
            this.name = "ValidationError"
        }
  }