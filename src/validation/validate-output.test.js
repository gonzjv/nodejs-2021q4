import validateOutput from './validate-output.js';

const NO_ACCESS_FILENAME = 'no-access-file.txt';
const NOT_EXIST_FILE = 'whiskey-bar.txt';
const WRITABLE_ERROR_SUBSTRING = 'is not writable';
const EXIST_ERROR_SUBSTRING = 'does not exist';

describe('validateOutput', () => {
  test('if user passes -o argument with path to file that does not exist ', () => {
    expect(() => {
      validateOutput(NOT_EXIST_FILE);
    }).toThrow(EXIST_ERROR_SUBSTRING);
  });

  test('if user passes -o argument with path to file with no write access', () => {
    expect(() => {
      validateOutput(NO_ACCESS_FILENAME);
    }).toThrow(WRITABLE_ERROR_SUBSTRING);
  });
});
