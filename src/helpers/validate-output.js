import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import getOptionValue from './get-options.js';
import handleFileError from './handle-file-error.js';
import { access, accessSync, constants } from 'fs';

const validateOutput = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const outputFileName =
    getOptionValue('-o') || getOptionValue('--output');
  const filePath = path.join(__dirname, '../..', outputFileName);

  try {
    accessSync(filePath, constants.F_OK);
  } catch (err) {
    handleFileError(
      `[OutputFileError] Easy, friend. File ${filePath} does not exist`,
    );
  }

  access(filePath, constants.W_OK, (err) => {
    if (err) {
      handleFileError(
        `[OutputFileError] Wow, wow, wow...easy, friend. File ${filePath} is not writable`,
      );
    }
  });
};

export default validateOutput;
