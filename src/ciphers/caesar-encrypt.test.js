import caesarEncrypt from './caesar-encrypt.js';

describe('caesarEncrypt', () => {
  test('if function returns encoded string ', () => {
    expect(caesarEncrypt('abc', 'encode')).toBe('bcd');
  });
  test('if function returns decoded string ', () => {
    expect(caesarEncrypt('abc', 'decode')).toBe('zab');
  });
});
