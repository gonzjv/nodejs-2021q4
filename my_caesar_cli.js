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
// console.log('my_caesar_cli: ENCODE done, my master!');

// if (options.action === 'decode') {
//   const caesarDecode = (text, shift) => {
//     const charCodeArr = text
//       .split('')
//       .map((char) =>
//         char.match(/[A-Z]/)
//           ? ((char.charCodeAt(0) - 90 - shift) % 26) + 90
//           : char.match(/[a-z]/)
//           ? ((char.charCodeAt(0) - 122 - shift) % 26) + 122
//           : char.charCodeAt(0),
//       );
//     const res = String.fromCharCode(...charCodeArr);
//     console.log('charCodeArr: ', charCodeArr);
//     console.log('before: ', text);
//     console.log('result: ', res);
//     return res;
//   };

//   const decodeStream = new Transform({
//     transform(chunk, encoding, callback) {
//       this.push(caesarDecode(chunk.toString(), Number(options.shift)));
//       callback();
//     },
//   });

//   pipeline(
//     fs.createReadStream(options.input),
//     decodeStream,
//     fs.createWriteStream(options.output),
//     (error) => {
//       error ? console.log(console.error()) : console.log('finished');
//     },
//   );
// }

// // console.log('my_caesar_cli in da house!');
