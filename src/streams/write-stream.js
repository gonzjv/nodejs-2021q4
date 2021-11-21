import getOptionValue from '../helpers/get-options.js';
import CustomWritable from './custom-writable.js';

const createWriteStream = () => {
  const outputFileName =
    getOptionValue('-o') || getOptionValue('--output');
  return outputFileName
    ? new CustomWritable(outputFileName)
    : process.stdout;
};

export default createWriteStream;
