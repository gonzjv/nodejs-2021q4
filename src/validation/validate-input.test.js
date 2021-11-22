import validateInput from './validate-input.js';

const NO_ACCESS_FILENAME = 'no-access-file.txt';
const NOT_EXIST_FILE = 'whiskey-bar.txt';
const READABLE_ERROR_SUBSTRING = 'is not readable';
const EXIST_ERROR_SUBSTRING = 'does not exist';

describe('validateInput', () => {
  test('if user passes -i argument with path to file that does not exist ', () => {
    expect(() => {
      validateInput(NOT_EXIST_FILE);
    }).toThrow(EXIST_ERROR_SUBSTRING);
  });

  test('if user passes -i argument with path to file with no read access', () => {
    expect(() => {
      validateInput(NO_ACCESS_FILENAME);
    }).toThrow(READABLE_ERROR_SUBSTRING);
  });
});
