import checkConfigMissing from '../helpers/check-config-missing.js';
import checkConfig from '../helpers/check-config.js';
import getOptionValue from '../helpers/get-options.js';

const validateConfig = () => {
  const configValue =
    getOptionValue('-c') || getOptionValue('--config');

  checkConfigMissing(configValue);

  checkConfig(configValue);
};

export default validateConfig;
