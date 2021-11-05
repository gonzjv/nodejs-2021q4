import atbashEncrypt from './ciphers/atbash-encrypt.js';
import caesarEncrypt from './ciphers/caesar-encrypt.js';
import rotateBy8Encrypt from './ciphers/rotate-by-8-encrypt.js';
import getOptionValue from './get-options.js';
import getMode from './helpers/get-mode.js';

const encrypt = (text) => {
  console.log('text: ', text);
  let result = text;
  const configValue = getOptionValue('-c');
  const configCharsArr = configValue && configValue.split('');

  configCharsArr.forEach((char, index, arr) => {
    if (char.match(/C/)) {
      result = caesarEncrypt(result, getMode(arr, index));
    }
    if (char.match(/A/)) {
      result = atbashEncrypt(result);
    }
    if (char.match(/R/)) {
      result = rotateBy8Encrypt(result, getMode(arr, index));
    }
  });

  return result;
};

export default encrypt;
