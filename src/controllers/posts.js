const errCatcher = require('../module/errCatcher');
const { getData } = require('../database/queries/getData');
const { postPosts } = require('../database/queries/postData');
const { updateData } = require('../database/queries/updateData');

const getPosts = (req, res) => {
  getData()
    .then(({ rows }) => res.status(200).json({ rows }))
    .catch(errCatcher('something went wrong...', 400));
};

const createPosts = (req, res, next) => {
  const { postContent } = req.body;
  postPosts(postContent)
    .then(
      ({ rows }) => res.status(200).json({ rows }),
    )
    .catch(next(errCatcher('something went wrong...', 400)));
  if (!postContent) {
    next(errCatcher('EMPTY input...', 400));
  }
  return res.status(200).json(postContent);
};

const updatePost = (req, res, next) => {
  const { postContent } = req.body;
  const { postId } = req.params;
  updateData(postId, postContent)
    .then(({ rows }) => res.status(200).json({ rows }))
    .catch(next(errCatcher('something went wrong...', 400)));

  if (!postContent) {
    next(errCatcher('EMPTY input...', 400));
  }
};

module.exports = { getPosts, createPosts, updatePost };
