class flagsError extends Error {
  constructor(message) {
    super(message);
    this.name = 'FlagsError';
    this.isUserError = true;
  }
}

export default flagsError;
