const commander = require('commander');
const fs = require('fs');
const { pipeline } = require('stream');

const program = new commander.Command();

program
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza')
  .option('-s, --shift', 'cipher letter shift')
  .option('-i, --input <file>', 'input file')
  .option('-o, --output', 'output file')
  .option('-a, --action <type>', 'action encode/decode');

program.parse(process.argv);

const options = program.opts();
if (options.small) {
  console.log('pizza details: ');
}
if (options.pizzaType) {
  console.log(`- ${options.pizzaType}`);
}
if (options.action === 'encode') {
  const inputFile = options.input;
  console.log('input file: ', options.input);
  fs.createReadStream(inputFile);
  console.log('my_caesar_cli: ENCODE done, my master!');
}

console.log('my_caesar_cli in da house!');
