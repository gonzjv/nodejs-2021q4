import getFlags from './helpers/get-flags.js';
import getOptionValue from './helpers/get-options.js';
import configError from './helpers/config-error.js';
import flagsError from './helpers/flags-error.js';
const { exit } = process;

const validateOptions = () => {
  const flags = getFlags();
  const requiredFlags = ['-c', '--config'];
  const isFlagAllowed = requiredFlags.some((flag) =>
    flags.includes(flag),
  );

  if (!isFlagAllowed) {
    throw new flagsError(
      'Stop, fellow! You need to enter valid options with flag -c or --config ',
    );
  }

  const configValue = getOptionValue('-c');
  const configCharsArr = configValue && configValue.split('');

  configCharsArr.forEach((char, index, arr) => {
    if (char.match(/[CR]/)) {
      const modesAllowed = [0, 1];
      const modeValue = arr[index + 1];
      const isModeValid = modesAllowed.some(
        (mode) => mode == modeValue,
      );

      if (!isModeValid) {
        throw new configError(
          'Available modes are: C1, C0 or R1, R0',
        );
      }
    }
    if (char.match(/[^ACR0-9-]/)) {
      throw new configError('Available ciphers are: C, A or R');
    }
  });
};

export default validateOptions;
