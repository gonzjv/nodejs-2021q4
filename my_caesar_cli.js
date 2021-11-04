const { pipeline } = require('stream');
const {
  readStream,
  transformStream,
  writeStream,
} = require('./src/streams/streams');
const { validateOptions } = require('./src/validate-options');

validateOptions();

pipeline(readStream, transformStream, writeStream, (error) => {
  error ? console.log(console.error()) : console.log('finished');
});
