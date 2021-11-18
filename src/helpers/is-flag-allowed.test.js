import flagsError from './flags-error.js';
import isFlagsAllowed from './is-flag-allowed.js';

const ERROR_MESSAGE =
  'Stop, fellow! You need to enter valid options with flag -c or --config ';

const UNCORRECT_FLAGS = ['-h', '--hello'];
const mockGetFlags = jest.fn(() => UNCORRECT_FLAGS);

describe('isFlagAllowed', () => {
  test('if user does not pass -c or --config argument', () => {
    expect(() => {
      isFlagsAllowed(mockGetFlags());
    }).toThrow(new flagsError(ERROR_MESSAGE));
  });
});
