import checkFlags from '../helpers/check-flags.js';
import getOptionValue from '../helpers/get-options.js';
import validateInput from './validate-input.js';
import validateOutput from './validate-output.js';

const validateFiles = () => {
  const isInputFlagEntered = checkFlags(['-i', '--input']);
  const isOutputFlagEntered = checkFlags(['-o', '--output']);

  if (isInputFlagEntered) {
    const inputFileName =
      getOptionValue('-i') || getOptionValue('--input');

    validateInput(inputFileName);
  }
  if (isOutputFlagEntered) {
    const outputFileName =
      getOptionValue('-o') || getOptionValue('--output');

    validateOutput(outputFileName);
  }
};

export default validateFiles;
