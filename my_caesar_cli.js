const fs = require('fs');
const { pipeline, Transform } = require('stream');
const { stdout, stdin, exit } = process;

const flags = process.argv.slice(2);
const requiredFlags = ['-c', '--config'];
const isRequiredFlags = requiredFlags.some((flag) => flags.includes(flag));
console.log('isReqFlags: ', isRequiredFlags);
if (!isRequiredFlags) {
  console.log('You need to enter valid flags: -c or --config ');
  exit(1);
}

const getOptionValue = (flag) => {
  const flagIndex = flags.indexOf(flag);
  const value = flagIndex !== -1 ? flags[flagIndex + 1] : null;
  return value;
};

const configValue = getOptionValue('-c');
const isCaesarNeeded = configValue && configValue.match(/C/) ? true : false;
console.log('isCaesar: ', isCaesarNeeded);

if (isCaesarNeeded) {
  const shiftDefault = 1;
  const caesarEncode = (text, shift) => {
    const charCodeArr = text
      .split('')
      .map((char) =>
        char.match(/[A-Z]/)
          ? ((char.charCodeAt(0) - 65 + shift) % 26) + 65
          : char.match(/[a-z]/)
          ? ((char.charCodeAt(0) - 97 + shift) % 26) + 97
          : char.charCodeAt(0),
      );
    const res = String.fromCharCode(...charCodeArr);
    // console.log('charCodeArr: ', charCodeArr);
    // console.log('before: ', text);
    // console.log('result: ', res);
    return res;
  };

  const getReadStream = () => {
    const inputValue = getOptionValue('-i');
    if (inputValue) {
      return fs.createReadStream(inputValue);
    } else {
      console.log('Text for encode: ');
      return process.stdin;
    }
  };

  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(caesarEncode(chunk.toString(), shiftDefault));
      callback();
    },
  });

  const getWriteStream = () => {
    const outputValue = getOptionValue('-o');
    if (outputValue) {
      return fs.createWriteStream(outputValue);
    } else {
      // console.log('Result: ');
      return process.stdout;
    }
  };

  pipeline(getReadStream(), transformStream, getWriteStream(), (error) => {
    error ? console.log(console.error()) : console.log('finished');
  });
  // console.log('my_caesar_cli: ENCODE done, my master!');
}

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
