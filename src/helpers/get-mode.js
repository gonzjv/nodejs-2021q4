const getMode = (array, index) => {
  const modeValue = array[index + 1];
  const mode = modeValue == '1' ? 'encode' : 'decode';
  return mode;
};

export default getMode;
