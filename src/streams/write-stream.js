import fs from 'fs';
import getOptionValue from '../helpers/get-options.js';

const createWriteStream = () => {
  const outputFileName =
    getOptionValue('-o') || getOptionValue('--output');
  if (outputFileName) {
    return fs.createWriteStream(outputFileName, {
      flags: 'a',
    });
  } else {
    return process.stdout;
  }
};

export default createWriteStream;
