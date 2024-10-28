export class AuthenticationError extends Error {
    constructor() {
      super("Authentication required.");
      this.name = "AuthenticationError";
    }
  }