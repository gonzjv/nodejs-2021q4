import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import getOptionValue from './get-options.js';
import handleFileError from './handle-file-error.js';
import { access, constants } from 'fs';

const validateInput = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const inputFileName =
    getOptionValue('-i') || getOptionValue('--input');
  const filePath = path.join(__dirname, '../..', inputFileName);

  access(filePath, constants.F_OK, (err) => {
    if (err) {
      handleFileError(
        `Easy, friend. File ${filePath} does not exist`,
      );
    }
  });

  access(filePath, constants.R_OK, (err) => {
    if (err) {
      handleFileError(
        `Wow, wow, wow...easy, friend. File ${filePath} is not readable'}`,
      );
    }
  });
};

export default validateInput;
