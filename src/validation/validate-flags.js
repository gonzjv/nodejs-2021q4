import getFlags from '../helpers/get-flags.js';
import isFlagsAllowed from '../helpers/is-flag-allowed.js';
import isFlagsDuplicate from '../helpers/is-flag-duplicate.js';

const validateFlags = () => {
  const flags = getFlags();

  isFlagsAllowed(flags);

  isFlagsDuplicate(flags);
};

export default validateFlags;
