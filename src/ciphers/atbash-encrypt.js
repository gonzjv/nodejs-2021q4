const atbashEncrypt = (text) => {
  const ALPHABET_LENGTH = 26;
  const UPPERCASE_START = 65;
  const UPPERCASE_END = 90;
  const LOWERCASE_START = 97;
  const LOWERCASE_END = 122;

  const charCodeArr = text
    .split('')
    .map((char) =>
      char.match(/[A-Z]/)
        ? UPPERCASE_END - (char.charCodeAt(0) - UPPERCASE_START)
        : char.match(/[a-z]/)
        ? LOWERCASE_END - (char.charCodeAt(0) - LOWERCASE_START)
        : char.charCodeAt(0),
    );
  const result = String.fromCharCode(...charCodeArr);
  console.log('before: ', text);
  console.log('result: ', result);
  return result;
};

export default atbashEncrypt;
