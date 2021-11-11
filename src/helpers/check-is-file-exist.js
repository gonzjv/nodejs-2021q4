import { accessSync, constants } from 'fs';
import handleFileError from '../errorHandlers/handle-file-error.js';

const checkIsFileExist = (filePath, errorName) => {
  try {
    accessSync(filePath, constants.F_OK);
  } catch (err) {
    handleFileError(
      `Human, stop it! ${errorName} happened. File ${filePath} does not exist`,
    );
  }
};

export default checkIsFileExist;
