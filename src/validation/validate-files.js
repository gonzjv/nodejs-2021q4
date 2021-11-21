import checkFlags from '../helpers/check-flags.js';
import validateInput from './validate-input.js';
import validateOutput from './validate-output.js';

const validateFiles = () => {
  const isInputFlagEntered = checkFlags(['-i', '--input']);
  const isOutputFlagEntered = checkFlags(['-o', '--output']);

  if (isInputFlagEntered) {
    validateInput();
  }
  if (isOutputFlagEntered) {
    validateOutput();
  }
};

export default validateFiles;
