import { Transform } from 'stream';
import encrypt from '../encrypt.js';

const createTransformStream = () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(encrypt(chunk.toString()));
      callback();
    },
  });
  return transformStream;
};

// module.exports = {
//   createTransformStream,
// };

export default createTransformStream;
