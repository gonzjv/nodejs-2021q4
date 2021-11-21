import getFlags from './get-flags.js';

const checkFlags = (flagNamesArr) => {
  const flags = getFlags();
  const isFlagEntered = flagNamesArr.some((flag) =>
    flags.includes(flag),
  );

  return isFlagEntered ? true : false;
};

export default checkFlags;
