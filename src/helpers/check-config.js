import configError from './config-error.js';

const checkConfig = (configValue) => {
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
    if (char.match(/A/)) {
      const modeValue = arr[index + 1];
      if (modeValue && modeValue !== '-') {
        throw new configError(
          'Atbash cipher should have not any modes',
        );
      }
    }
    if (char.match(/[^ACR0-9-]/)) {
      throw new configError('Available ciphers are: C, A or R');
    }
  });
};

export default checkConfig;
