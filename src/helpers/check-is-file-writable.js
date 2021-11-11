import { access, constants } from 'fs';
import handleFileError from '../errorHandlers/handle-file-error.js';

const checkIsFileWritable = (filePath) => {
  access(filePath, constants.W_OK, (err) => {
    if (err) {
      handleFileError(
        `[OutputFileError] Wow, wow, wow...easy, friend. File ${filePath} is not writable`,
      );
    }
  });
};

export default checkIsFileWritable;
