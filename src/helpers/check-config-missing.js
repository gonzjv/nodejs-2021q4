import configError from './config-error.js';

const checkConfigMissing = (configValue) => {
  if (typeof configValue !== 'string') {
    throw new configError(
      'Hey, nerd! You need to enter after -c something like C1 or R1 or A or C0-C1-R1 etc.',
    );
  }
};

export default checkConfigMissing;
