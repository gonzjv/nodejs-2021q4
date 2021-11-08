class configError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ConfigError';
    this.isUserError = true;
  }
}

export default configError;
