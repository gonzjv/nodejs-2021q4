import { access, constants } from 'fs';
import handleFileError from '../errorHandlers/handle-file-error.js';

const checkIsFileReadable = (filePath) => {
  access(filePath, constants.R_OK, (err) => {
    if (err) {
      handleFileError(
        `Wow, wow, wow...easy, friend. File ${filePath} is not readable'}`,
      );
    }
  });
};

export default checkIsFileReadable;
