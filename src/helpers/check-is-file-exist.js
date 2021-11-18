import { accessSync, constants } from 'fs';
import fileError from './file-error.js';

const checkIsFileExist = (filePath) => {
  try {
    accessSync(filePath, constants.F_OK);
  } catch (err) {
    throw new fileError(
      `Human, stop it!. File ${filePath} does not exist`,
    );
  }
};

export default checkIsFileExist;
