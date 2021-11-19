import { access, constants } from 'fs';
import handleFileError from '../errorHandlers/handle-file-error.js';
import fileError from './file-error.js';

const checkIsFileReadable = (filePath) => {
  try {
    access(filePath, constants.R_OK);
  } catch (error) {
    throw new fileError(
      `Wow, wow, wow...easy, friend. File ${filePath} is not readable`,
    );
  }
};

export default checkIsFileReadable;
