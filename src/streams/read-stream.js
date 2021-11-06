import fs from 'fs';
import getOptionValue from '../helpers/get-options.js';

const createReadStream = () => {
  const inputValue = getOptionValue('-i');
  if (inputValue) {
    return fs.createReadStream(inputValue);
  } else {
    console.log('Text for encode: ');
    return process.stdin;
  }
};

export default createReadStream;
