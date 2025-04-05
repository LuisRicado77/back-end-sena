export class ConcurrencyError extends Error {
    constructor() {
      super("A concurrency conflict occurred.");
      this.name = "ConcurrencyError";
    }
  }
  