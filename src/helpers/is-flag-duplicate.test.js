import flagsError from './flags-error.js';
import isFlagsDuplicate from './is-flag-duplicate.js';

const ERROR_MESSAGE =
  'Stop, man! You are duplicate some flag. Each flag available to enter only one time. ';

const MOCK_FLAGS = ['-c', '--config'];
const mockGetFlags = jest.fn(() => MOCK_FLAGS);

describe('isFlagDuplicate', () => {
  test('if user passes the same cli argument twice;', () => {
    expect(() => {
      isFlagsDuplicate(mockGetFlags());
    }).toThrow(new flagsError(ERROR_MESSAGE));
  });
});
