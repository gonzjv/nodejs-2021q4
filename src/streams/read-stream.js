const { getOptionValue } = require('../get-options');
const fs = require('fs');

const createReadStream = () => {
  const inputValue = getOptionValue('-i');
  if (inputValue) {
    return fs.createReadStream(inputValue);
  } else {
    console.log('Text for encode: ');
    return process.stdin;
  }
};

module.exports = {
  createReadStream,
};
