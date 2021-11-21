let { exit, stderr } = process;

const handleError = (err) => {
  const { isUserError, name, message } = err;

  if (isUserError) {
    stderr.write(`${name}: ${message}\n`);
  } else {
    throw err;
  }
  exit(1);
};

export default handleError;
