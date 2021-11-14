import { Writable } from 'stream';
import fs from 'fs';

class CustomWritable extends Writable {
  constructor(filePath) {
    super();
    this.filePath = filePath;
  }

  _construct(callback) {
    fs.open(this.filePath, 'a', (err, fd) => {
      if (err) {
        callback(err);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }

  _write(chunk, encoding, callback) {
    fs.write(this.fd, chunk, callback);
  }
}

export default CustomWritable;
