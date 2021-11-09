import flagsError from './flags-error.js';

const isFlagsDuplicate = (flags) => {
  const filteredFlagsBy = (flag, shortFlag, flags) =>
    flags.filter((e) => e === shortFlag || e === flag);

  const isFlagDuplicate =
    filteredFlagsBy('--config', '-c', flags).length >= 2
      ? true
      : filteredFlagsBy('--input', '-i', flags).length >= 2
      ? true
      : filteredFlagsBy('--output', '-o', flags).length >= 2
      ? true
      : false;

  if (isFlagDuplicate) {
    throw new flagsError(
      'Stop, man! You are duplicate some flag. Each flag available to enter only one time. ',
    );
  }
};

export default isFlagsDuplicate;
