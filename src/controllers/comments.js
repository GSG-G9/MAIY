const errCatcher = require('../module/errCatcher');

const getComments = (req, res) => {
  res.status(200).json({});
};

const createComment = (req, res, next) => {
  const { commentContent } = req.body;
  if (!commentContent) {
    // throw new Error('Empty input...');
    next(errCatcher('EMPTY input...', 400));
  }
  res.status(200).json({});
};

module.exports = { getComments, createComment };
