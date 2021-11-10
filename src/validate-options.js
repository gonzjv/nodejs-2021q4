import validateFlags from './helpers/validate-flags.js';
import validateConfig from './helpers/validate-config.js';
import validateFiles from './helpers/validate-files.js';

const validateOptions = () => {
  validateFlags();
  validateConfig();
  validateFiles();
};

export default validateOptions;
