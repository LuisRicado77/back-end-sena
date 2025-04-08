export class ExternalDependencyError extends Error {
    constructor() {
      super("An external service failed to respond.");
      this.name = "ExternalDependencyError";
    }
  }
  