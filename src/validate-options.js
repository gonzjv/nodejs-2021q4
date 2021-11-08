import validateFlags from './helpers/validate-flags.js';
import validateConfig from './helpers/validate-config.js';

const validateOptions = () => {
  validateFlags();
  validateConfig();
};

export default validateOptions;
