import getOptionValue from '../helpers/get-options.js';
import CustomReadable from './custom-readable.js';

const createReadStream = () => {
  const inputFileName =
    getOptionValue('-i') || getOptionValue('--input');
  return inputFileName
    ? new CustomReadable(inputFileName)
    : process.stdin;
};

export default createReadStream;
