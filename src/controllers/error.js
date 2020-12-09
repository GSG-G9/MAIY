const path = require('path');

const error404 = (req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, '..', '..', 'public', '404.html'));
};

// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(err);
  res
    .status(err.status)
    .json(err.msg);
};

module.exports = {
  error404,
  serverError,
};
