import { accessSync, constants } from 'fs';
import fileError from './file-error.js';

const checkIsFileWritable = (filePath) => {
  try {
    accessSync(filePath, constants.W_OK);
  } catch (error) {
    throw new fileError(
      `Wow, wow, wow...easy, friend. File ${filePath} is not writable`,
    );
  }
};

export default checkIsFileWritable;
