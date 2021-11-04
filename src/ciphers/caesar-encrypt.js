const caesarEncrypt = (text, mode) => {
  const shift = mode == 'encode' ? 1 : -1;
  const ALPHABET_LENGTH = 26;
  const UPPERCASE_START = mode == 'encode' ? 65 : 90;
  const LOWERCASE_START = mode == 'encode' ? 97 : 122;

  const charCodeArr = text
    .split('')
    .map((char) =>
      char.match(/[A-Z]/)
        ? ((char.charCodeAt(0) - UPPERCASE_START + shift) %
            ALPHABET_LENGTH) +
          UPPERCASE_START
        : char.match(/[a-z]/)
        ? ((char.charCodeAt(0) - LOWERCASE_START + shift) %
            ALPHABET_LENGTH) +
          LOWERCASE_START
        : char.charCodeAt(0),
    );
  const res = String.fromCharCode(...charCodeArr);
  // console.log('charCodeArr: ', charCodeArr);
  console.log('before: ', text);
  console.log('result: ', res);
  return res;
};

module.exports = {
  caesarEncrypt,
};
