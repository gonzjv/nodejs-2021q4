import { Transform } from 'stream';
import atbashEncrypt from '../ciphers/atbash-encrypt.js';

class atbashStream extends Transform {
  _transform(chunk, encoding, callback) {
    this.push(atbashEncrypt(chunk.toString()));
    callback();
  }
}

export default atbashStream;
