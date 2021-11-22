import caesarEncrypt from './caesar-encrypt.js';

const TEXT_FOR_ENCRYPT = 'This is secret. Message about "_" symbol!';
const ENCODE_RESULT = 'Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!';
const DECODE_RESULT = 'Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!';

describe('caesarEncrypt', () => {
  test('if function returns string ', () => {
    expect(caesarEncrypt(TEXT_FOR_ENCRYPT, 'encode')).toEqual(
      expect.any(String),
    );
  });
  test('if function returns correctly encoded string ', () => {
    expect(caesarEncrypt(TEXT_FOR_ENCRYPT, 'encode')).toBe(
      ENCODE_RESULT,
    );
  });
  test('if function returns correctly decoded string ', () => {
    expect(caesarEncrypt(TEXT_FOR_ENCRYPT, 'decode')).toBe(
      DECODE_RESULT,
    );
  });
});
