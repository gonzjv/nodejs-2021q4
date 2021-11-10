import { pipeline } from 'stream';
import handleError from './src/handle-error.js';
import validateOptions from './src/validate-options.js';
import createReadStream from './src/streams/read-stream.js';
import createTransformStreams from './src/streams/transform-streams.js';
import createWriteStream from './src/streams/write-stream.js';

try {
  validateOptions();
} catch (err) {
  handleError(err);
}

const readStream = createReadStream();
const writeStream = createWriteStream();
const transformStreams = createTransformStreams();

pipeline(readStream, ...transformStreams, writeStream, (error) => {
  error ? console.log(console.error()) : console.log('finished');
});
