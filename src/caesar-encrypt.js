const caesarEncrypt = (text, mode) => {
  const shift = 1;

  const charCodeArr = text
    .split('')
    .map((char) =>
      char.match(/[A-Z]/)
        ? ((char.charCodeAt(0) - 65 + shift) % 26) + 65
        : char.match(/[a-z]/)
        ? ((char.charCodeAt(0) - 97 + shift) % 26) + 97
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
