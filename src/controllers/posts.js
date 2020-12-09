const { errCatcher } = require('../module/errCatcher');
const { getData } = require('../database/queries/getData');
const { postPosts } = require('../database/queries/postData');
const { updateData } = require('../database/queries/updateData');

const getPosts = (req, res) => {
  getData()
    .then(({ rows }) => res.status(200).json({ rows }))
    .catch(errCatcher('something went wrong...', 400));
};

const createPost = (req, res, next) => {
  const { postContent } = req.body;
  console.log(postContent);
  if (!postContent) {
    next(errCatcher('EMPTY input...', 400));
  }
  postPosts(postContent)
    .then(
      ({ rows }) => res.status(200).json({ rows }),
    )
    .catch(next);
};

const updatePost = (req, res, next) => {
  const { postContent } = req.body;
  const { postId } = req.params;
  if (!postContent) {
    next(errCatcher('EMPTY input...', 400));
  }
  updateData(postId, postContent)
    .then(({ rows }) => res.status(200).json({ rows }))
    .catch(next);
};

module.exports = { getPosts, createPost, updatePost };
