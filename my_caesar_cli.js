import { pipeline } from 'stream';
import handleError from './src/handle-error.js';
import {
  readStream,
  writeStream,
  transformStreams,
} from './src/streams/streams.js';
import validateOptions from './src/validate-options.js';

try {
  validateOptions();
} catch (err) {
  handleError(err);
}

pipeline(readStream, ...transformStreams, writeStream, (error) => {
  error ? console.log(console.error()) : console.log('finished');
});
