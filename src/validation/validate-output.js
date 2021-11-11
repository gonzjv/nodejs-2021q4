import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import getOptionValue from '../helpers/get-options.js';
import handleFileError from '../errorHandlers/handle-file-error.js';
import checkIsFileExist from '../helpers/check-is-file-exist.js';
import checkIsFileWritable from '../helpers/check-is-file-writable.js';

const validateOutput = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const outputFileName =
    getOptionValue('-o') || getOptionValue('--output');

  if (!outputFileName) {
    handleFileError(
      '! FileError. Missing ouput file name after -o (--output) flag',
    );
  }

  const filePath = path.join(__dirname, '../..', outputFileName);

  checkIsFileExist(filePath, 'OutputFileError');

  checkIsFileWritable(filePath);
};

export default validateOutput;
