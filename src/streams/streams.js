const { createReadStream } = require('./read-stream');
const {
  createTransformStream,
} = require('./transform-stream');
const { createWriteStream } = require('./write-stream');

const readStream = createReadStream();
const writeStream = createWriteStream();
const transformStream = createTransformStream();

module.exports = {
  readStream,
  writeStream,
  transformStream,
};
