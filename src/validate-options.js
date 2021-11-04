const { getFlags } = require('./get-flags');
const { getOptionValue } = require('./get-options');
const { handleErorr } = require('./handle-error');
const { exit } = process;

const validateOptions = () => {
  const flags = getFlags();
  const requiredFlags = ['-c', '--config'];
  const isFlagAllowed = requiredFlags.some((flag) =>
    flags.includes(flag),
  );
  console.log('is flag allowed? ', isFlagAllowed);

  if (!isFlagAllowed) {
    console.log(
      'Stop, fellow! You need to enter valid options with flag -c or --config ',
    );
    exit(1);
  }

  const configValue = getOptionValue('-c');
  const configCharsArr = configValue && configValue.split('');

  configCharsArr.forEach((char, index, arr) => {
    // console.log('arr: ', arr);
    if (char.match(/[CR]/)) {
      const modesAllowed = [0, 1];
      const modeValue = arr[index + 1];
      const isModeValid = modesAllowed.some(
        (mode) => mode == modeValue,
      );
      isModeValid
        ? null
        : handleErorr('Available modes are: C1, C0 or R1, R0');
    }
    //   if (char.match(/[^ACR]/)) {
    //     handleErorr('Available ciphers are: C, A or R');
    //   }
  });
};

module.exports = {
  validateOptions,
};
