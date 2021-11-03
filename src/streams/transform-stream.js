const { Transform } = require('stream');
const { encrypt } = require('../encrypt');

const createTransformStream = () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(encrypt(chunk.toString()));
      callback();
    },
  });
  return transformStream;
};

module.exports = {
  createTransformStream,
};
