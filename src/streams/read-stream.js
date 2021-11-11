import fs from 'fs';
import getOptionValue from '../helpers/get-options.js';

const createReadStream = () => {
  const inputFileName =
    getOptionValue('-i') || getOptionValue('--input');
  if (inputFileName) {
    return fs.createReadStream(inputFileName);
  } else {
    return process.stdin;
  }
};

export default createReadStream;
