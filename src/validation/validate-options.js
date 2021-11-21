import validateConfig from './validate-config.js';
import validateFiles from './validate-files.js';
import validateFlags from './validate-flags.js';

const validateOptions = () => {
  validateFlags();
  validateConfig();
  validateFiles();
};

export default validateOptions;
