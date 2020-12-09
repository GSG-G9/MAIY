const errCatcher = require('../module/errCatcher');
const { getData } = require('../database/queries/getData');
const { postComments } = require('../database/queries/postData');

const getComments = (req, res) => {
  getData()
    .then(({ rows }) => {
      res.status(200).json({ rows });
    })
    .catch(errCatcher('NOT FOUND  ...', 400));
};

const createComment = (req, res, next) => {
  const { commentContent, postId } = req.body;
  if (!commentContent) {
    next(errCatcher('EMPTY input...', 400));
  }
  postComments(commentContent, postId)
    .then(({ rows }) => {
      res.status(200).json({ rows });
    })
    .catch(next(errCatcher('EMPTY input...', 400)));
};

module.exports = { getComments, createComment };
