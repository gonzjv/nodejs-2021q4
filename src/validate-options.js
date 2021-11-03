const { getFlags } = require('./get-flags');
const { exit } = process;

const validateOptions = () => {
  const flags = getFlags();
  const requiredFlags = ['-c', '--config'];
  const isFlagAllowed = requiredFlags.some((flag) => flags.includes(flag));
  console.log('is flag allowed? ', isFlagAllowed);

  if (!isFlagAllowed) {
    console.log(
      'Stop, fellow! You need to enter valid options with flag -c or --config ',
    );
    exit(1);
  }
};

module.exports = {
  validateOptions,
};
