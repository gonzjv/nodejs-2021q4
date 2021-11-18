class fileError extends Error {
  constructor(message) {
    super(message);
    this.name = 'FileError';
    this.isUserError = true;
  }
}

export default fileError;
