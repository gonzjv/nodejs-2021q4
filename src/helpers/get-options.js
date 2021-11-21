import getFlags from './get-flags.js';

const flags = getFlags();

const getOptionValue = (flag) => {
  const flagIndex = flags.indexOf(flag);
  const value = flagIndex !== -1 ? flags[flagIndex + 1] : null;
  return value;
};

export default getOptionValue;
