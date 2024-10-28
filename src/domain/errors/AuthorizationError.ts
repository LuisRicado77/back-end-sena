export class AuthorizationError extends Error {
    constructor() {
      super("You do not have permission to perform this action.");
      this.name = "AuthorizationError";
    }
  }
  