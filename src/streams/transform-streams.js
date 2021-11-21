import getMode from '../helpers/get-mode.js';
import getOptionValue from '../helpers/get-options.js';
import atbashStream from './atbash-stream.js';
import caesarStream from './caesar-stream.js';
import rotateBy8Stream from './rotate-by-8-stream.js.js';

const createTransformStreams = () => {
  const transformStreams = [];
  const configValue =
    getOptionValue('-c') || getOptionValue('--config');
  const configCharsArr = configValue && configValue.split('');

  configCharsArr.forEach((char, index, arr) => {
    if (char.match(/C/)) {
      const mode = getMode(arr, index);
      transformStreams.push(new caesarStream(mode));
    }
    if (char.match(/A/)) {
      transformStreams.push(new atbashStream());
    }
    if (char.match(/R/)) {
      const mode = getMode(arr, index);
      transformStreams.push(new rotateBy8Stream(mode));
    }
  });

  return transformStreams;
};

export default createTransformStreams;
