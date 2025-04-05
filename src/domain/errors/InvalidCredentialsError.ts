import { ERROR_MESSAGE } from "./Messages";
export class InvalidCredentialError extends Error {
    constructor(message?:string) {
      super(ERROR_MESSAGE.INVALID_CREDENTIAL_ERROR);
      this.name = "InvalidCredentialError";
    }
  }