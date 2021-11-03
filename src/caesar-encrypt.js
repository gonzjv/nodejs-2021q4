const caesarEncrypt = (text, mode) => {
  const shift = 1;
  const ALPHABET_LENGTH = 26;
  const LOWERCASE_START = 97;
  const UPPERCASE_START = 65;

  const charCodeArr = text.split('').map(
    (char) => {
      if (char.match(/[A-Z]/)) {
        return (
          ((char.charCodeAt(0) - UPPERCASE_START + shift) %
            ALPHABET_LENGTH) +
          UPPERCASE_START
        );
      }
      if (char.match(/[a-z]/)) {
        return (
          ((char.charCodeAt(0) - LOWERCASE_START + shift) %
            ALPHABET_LENGTH) +
          LOWERCASE_START
        );
      }
    },
    // : char.charCodeAt(0),
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
