import { pipeline } from 'stream';
import {
  readStream,
  writeStream,
  transformStream,
} from './src/streams/streams.js';
import validateOptions from './src/validate-options.js';

validateOptions();

pipeline(readStream, transformStream, writeStream, (error) => {
  error ? console.log(console.error()) : console.log('finished');
});
