import createReadStream from './read-stream.js';
import createWriteStream from './write-stream.js';
import createTransformStreams from './transform-streams.js';

const readStream = createReadStream();
const writeStream = createWriteStream();
const transformStreams = createTransformStreams();

export { readStream, writeStream, transformStreams };
