import validateInput from './validate-input.js';
import validateOutput from './validate-output.js';

const validateFiles = () => {
  validateInput();
  validateOutput();
};

export default validateFiles;
