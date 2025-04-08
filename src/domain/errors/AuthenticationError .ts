import { ERROR_MESSAGE } from "./Messages";
export class AuthenticationError extends Error {
    constructor(message?:string) {
      super(ERROR_MESSAGE.AUTHENTICATION_ERROR);
      this.name = "AuthenticationError";
    }
  }