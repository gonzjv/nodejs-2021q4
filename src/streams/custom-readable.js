import { Readable } from 'stream';
import fs from 'fs';

class CustomReadable extends Readable {
  constructor(filePath) {
    super();
    this.filePath = filePath;
    this.fd = null;
  }

  _construct(callback) {
    fs.open(this.filePath, (err, fd) => {
      if (err) {
        callback(err);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }

  _read(n) {
    const buff = Buffer.alloc(n);
    fs.read(this.fd, buff, 0, n, null, (err, bytesRead) => {
      if (err) {
        this.destroy(err);
      } else {
        this.push(bytesRead > 0 ? buff.slice(0, bytesRead) : null);
      }
    });
  }

  _destroy(err, callback) {
    if (this.fd) {
      fs.close(this.fd, (er) => callback(er || err));
    } else {
      callback(err);
    }
  }
}

export default CustomReadable;
