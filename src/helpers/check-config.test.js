import checkConfig from './check-config.js';

const INCORRECT_MODE = 'C5';
const INCORRECT_ATBASH_MODE = 'A1';
const UNAVAILABLE_CIPHER = 'U1';

describe('checkConfig', () => {
  test('if user passes incorrent encode mode in argument for --config', () => {
    expect(() => {
      checkConfig(INCORRECT_MODE);
    }).toThrowError('Available modes are: C1, C0 or R1, R0');
  });

  test('if user passes Atbash cipher mode in argument for --config ', () => {
    expect(() => {
      checkConfig(INCORRECT_ATBASH_MODE);
    }).toThrowError('Atbash cipher should have not any modes');
  });

  test('if user passes unavailable cipher character in argument for --config ', () => {
    expect(() => {
      checkConfig(UNAVAILABLE_CIPHER);
    }).toThrowError('Available ciphers are: C, A or R');
  });
});
