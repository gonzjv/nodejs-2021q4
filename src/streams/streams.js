import createReadStream from './read-stream.js';
import createWriteStream from './write-stream.js';
import createTransformStream from './transform-stream.js';

const readStream = createReadStream();
const writeStream = createWriteStream();
const transformStream = createTransformStream();

export { readStream, writeStream, transformStream };
