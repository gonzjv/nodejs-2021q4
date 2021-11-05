import fs from 'fs';
import getOptionValue from '../get-options.js';

const createWriteStream = () => {
  const outputValue = getOptionValue('-o');
  if (outputValue) {
    return fs.createWriteStream(outputValue);
  } else {
    // console.log('Result: ');
    return process.stdout;
  }
};

// module.exports = {
//   createWriteStream,
// };

export default createWriteStream;
