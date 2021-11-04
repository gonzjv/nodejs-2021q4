const { atbashEncrypt } = require('./ciphers/atbash-encrypt');
const { caesarEncrypt } = require('./ciphers/caesar-encrypt');
const { getOptionValue } = require('./get-options');
const { handleErorr } = require('./handle-error');

// const isCaesarNeeded =
//   configValue && configValue.match(/C/) ? true : false;
// console.log('isCaesar: ', isCaesarNeeded);

const encrypt = (text) => {
  let result = text;
  const configValue = getOptionValue('-c');
  const configCharsArr = configValue && configValue.split('');

  configCharsArr.forEach((char, index, arr) => {
    if (char.match(/C/)) {
      // console.log('arr: ', arr);
      const modeValue = arr[index + 1];
      const mode = modeValue == '1' ? 'encode' : 'decode';
      console.log('mode: ', mode);
      result = caesarEncrypt(result, mode);
    } else if (char.match(/A/)) {
      result = atbashEncrypt(result);
    }
  });

  return result;
};

module.exports = {
  encrypt,
};
