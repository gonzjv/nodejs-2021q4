import { Transform } from 'stream';
import rotateBy8Encrypt from '../ciphers/rotate-by-8-encrypt.js';

class rotateBy8Stream extends Transform {
  constructor(mode) {
    super(mode);
    this.mode = mode;
  }
  _transform(chunk, encoding, callback) {
    this.push(rotateBy8Encrypt(chunk.toString(), this.mode));
    callback();
  }
}

export default rotateBy8Stream;
