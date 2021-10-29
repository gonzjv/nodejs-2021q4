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
    const charCodeArr = text.split('').map(
      (char) =>
        char.match(/[A-Za-z]/) ? char.charCodeAt(0) + shift : char.charCodeAt(0),
      // true ? char.charCodeAt(0) + 1 : char.charCodeAt(0),
    );
    const res = String.fromCharCode(...charCodeArr);
    console.log('charCodeArr: ', charCodeArr);
    console.log('text before: ', text);
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
  // console.log('inputFile: ', inputFile);
  console.log('my_caesar_cli: ENCODE done, my master!');
}

console.log('my_caesar_cli in da house!');
