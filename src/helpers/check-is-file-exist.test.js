import checkIsFileExist from './check-is-file-exist.js';
import fileError from './file-error.js';

const WRONG_PATH = './Tibet/EverestMountain';
const ERROR_MESSAGE = `Human, stop it!. File ${WRONG_PATH} does not exist`;

describe('checkIsFileExist', () => {
  test('if user passes -i argument with path that does not exist or with no read access', () => {
    expect(() => {
      checkIsFileExist(WRONG_PATH);
    }).toThrow(new fileError(ERROR_MESSAGE));
  });
});
