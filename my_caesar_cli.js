const commander = require('commander');
const fs = require('fs');
const { pipeline, Transform } = require('stream');

const program = new commander.Command();

program
  .option('-p, --pizza-type <type>', 'flavour of pizza')
  .option('-s, --shift <number>', 'cipher letter shift')
  .option('-i, --input <file>', 'input file')
  .option('-o, --output <file>', 'output file')
  .option('-a, --action <type>', 'action encode/decode');

program.parse(process.argv);

const options = program.opts();
if (options.pizzaType) {
  console.log(`- ${options.pizzaType}`);
}
if (options.action === 'encode') {
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
    console.log('charCodeArr: ', charCodeArr);
    console.log('before: ', text);
    console.log('result: ', res);
    return res;
  };
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(caesarEncode(chunk.toString(), Number(options.shift)));
      callback();
    },
  });
  pipeline(
    fs.createReadStream(options.input),
    transformStream,
    fs.createWriteStream(options.output),
    (error) => {
      error ? console.log(console.error()) : console.log('finished');
    },
  );
  console.log('my_caesar_cli: ENCODE done, my master!');
}

if (options.action === 'decode') {
  const caesarDecode = (text, shift) => {
    const charCodeArr = text
      .split('')
      .map((char) =>
        char.match(/[A-Z]/)
          ? ((char.charCodeAt(0) - 90 - shift) % 26) + 90
          : char.match(/[a-z]/)
          ? ((char.charCodeAt(0) - 122 - shift) % 26) + 122
          : char.charCodeAt(0),
      );
    const res = String.fromCharCode(...charCodeArr);
    console.log('charCodeArr: ', charCodeArr);
    console.log('before: ', text);
    console.log('result: ', res);
    return res;
  };

  const decodeStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(caesarDecode(chunk.toString(), Number(options.shift)));
      callback();
    },
  });

  pipeline(
    fs.createReadStream(options.input),
    decodeStream,
    fs.createWriteStream(options.output),
    (error) => {
      error ? console.log(console.error()) : console.log('finished');
    },
  );
}

console.log('my_caesar_cli in da house!');
