import checkConfig from './check-config.js';

const INCORRECT_OPTION = 'C5';

describe('checkConfig', () => {
  test('if user passes incorrent symbols in argument for --config', () => {
    expect(() => {
      checkConfig(INCORRECT_OPTION);
    }).toThrowError('Available modes are: C1, C0 or R1, R0');
  });
});
