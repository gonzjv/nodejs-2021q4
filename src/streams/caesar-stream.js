import { Transform } from 'stream';
import caesarEncrypt from '../ciphers/caesar-encrypt.js';

class caesarStream extends Transform {
  constructor(mode) {
    super(mode);
    this.mode = mode;
  }
  _transform(chunk, encoding, callback) {
    this.push(caesarEncrypt(chunk.toString(), this.mode));
    callback();
  }
}

export default caesarStream;
