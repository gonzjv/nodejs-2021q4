import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import handleFileError from '../errorHandlers/handle-file-error.js';
import checkIsFileExist from '../helpers/check-is-file-exist.js';
import checkIsFileReadable from '../helpers/check-is-file-readable.js';

const validateInput = (inputFileName) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  if (!inputFileName) {
    handleFileError(
      '! FileError. Missing file name after -i (--input) flag',
    );
  }

  const filePath = path.join(__dirname, '../..', inputFileName);

  checkIsFileExist(filePath);

  checkIsFileReadable(filePath);
};

export default validateInput;
