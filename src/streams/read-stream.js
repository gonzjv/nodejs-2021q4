import fs from 'fs';
import getOptionValue from '../get-options.js';

const createReadStream = () => {
  const inputValue = getOptionValue('-i');
  if (inputValue) {
    return fs.createReadStream(inputValue);
  } else {
    console.log('Text for encode: ');
    return process.stdin;
  }
};

// module.exports = {
//   createReadStream,
// };

export default createReadStream;
