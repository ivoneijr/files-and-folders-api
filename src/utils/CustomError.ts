class CustomError extends Error {
  public code: number;

  constructor(code: number, message: string) {
      super(message);
      this.code = code;

      Object.setPrototypeOf(this, new.target.prototype);

      if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
      }

      this.name = this.constructor.name;
  }
}

export default CustomError;
