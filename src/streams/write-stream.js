import fs from 'fs';
import getOptionValue from '../helpers/get-options.js';

const createWriteStream = () => {
  const outputValue = getOptionValue('-o');
  if (outputValue) {
    return fs.createWriteStream(outputValue);
  } else {
    return process.stdout;
  }
};

export default createWriteStream;
