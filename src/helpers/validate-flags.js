import getFlags from './get-flags.js';
import isFlagsAllowed from './is-flag-allowed.js';
import isFlagsDuplicate from './is-flag-duplicate.js';

const validateFlags = () => {
  const flags = getFlags();

  isFlagsAllowed(flags);

  isFlagsDuplicate(flags);
};

export default validateFlags;
