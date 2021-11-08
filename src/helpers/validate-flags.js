import flagsError from './flags-error.js';
import getFlags from './get-flags.js';

const validateFlags = () => {
  const flags = getFlags();
  console.log('flags: ', flags);
  const requiredFlags = ['-c', '--config'];
  const isFlagAllowed = requiredFlags.some((flag) =>
    flags.includes(flag),
  );

  if (!isFlagAllowed) {
    throw new flagsError(
      'Stop, fellow! You need to enter valid options with flag -c or --config ',
    );
  }
};

export default validateFlags;
