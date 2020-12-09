const { errCatcher } = require('../module/errCatcher');
const { getData } = require('../database/queries/getData');
const { postComments } = require('../database/queries/postData');

const getComments = (req, res, next) => {
  getData()
    .then(({ rows }) => {
      res.status(200).json({ rows });
    })
    .catch((err) => next(err));
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
    .catch(next);
};

module.exports = { getComments, createComment };
