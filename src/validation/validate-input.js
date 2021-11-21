import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import getOptionValue from '../helpers/get-options.js';
import handleFileError from '../errorHandlers/handle-file-error.js';
import checkIsFileExist from '../helpers/check-is-file-exist.js';
import checkIsFileReadable from '../helpers/check-is-file-readable.js';

const validateInput = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const inputFileName =
    getOptionValue('-i') || getOptionValue('--input');

  if (!inputFileName) {
    handleFileError(
      '! FileError. Missing file name after -i (--input) flag',
    );
  }

  const filePath = path.join(__dirname, '../..', inputFileName);

  checkIsFileExist(filePath, 'InputFileError');

  checkIsFileReadable(filePath);
};

export default validateInput;
