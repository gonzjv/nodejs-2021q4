import checkIsFileReadable from './check-is-file-readable.js';

const NO_ACCESS_FILENAME = 'no-access-file.txt';
const ERROR_MESSAGE_SUBSTRING = 'is not readable';

describe('checkIsFileReadable', () => {
  test('if user passes -i argument with no read access', () => {
    expect(() => {
      checkIsFileReadable(NO_ACCESS_FILENAME);
    }).toThrowError(ERROR_MESSAGE_SUBSTRING);
  });
});
