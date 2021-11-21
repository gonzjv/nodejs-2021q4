import flagsError from './flags-error.js';

const isFlagsAllowed = (flags) => {
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

export default isFlagsAllowed;
