const { exit } = process;

const handleErorr = (message) => {
  console.log(message);
  exit(1);
};

module.exports = {
  handleErorr,
};
