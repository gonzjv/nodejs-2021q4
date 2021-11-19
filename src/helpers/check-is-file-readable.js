import { accessSync, constants } from 'fs';
import fileError from './file-error.js';

const checkIsFileReadable = (filePath) => {
  try {
    accessSync(filePath, constants.R_OK);
  } catch (error) {
    throw new fileError(
      `Wow, wow, wow...easy, friend. File ${filePath} is not readable`,
    );
  }
};

export default checkIsFileReadable;
