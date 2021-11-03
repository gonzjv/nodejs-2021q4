const fs = require('fs');
const { getOptionValue } = require('../get-options');

const createWriteStream = () => {
  const outputValue = getOptionValue('-o');
  if (outputValue) {
    return fs.createWriteStream(outputValue);
  } else {
    // console.log('Result: ');
    return process.stdout;
  }
};

module.exports = {
  createWriteStream,
};
