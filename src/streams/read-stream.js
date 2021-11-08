import fs from 'fs';
import getOptionValue from '../helpers/get-options.js';

const createReadStream = () => {
  const inputValue = getOptionValue('-i');
  if (inputValue) {
    return fs.createReadStream(inputValue);
  } else {
    return process.stdin;
  }
};

export default createReadStream;
