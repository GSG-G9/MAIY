const errCatcher = require('../module/errCatcher');

const getPosts = (req, res) => {
  res.status(200).json({});
};

const createPosts = (req, res, next) => {
  const { postContent } = req.body;
  if (!postContent) {
    // throw new Error('Empty input...');
    next(errCatcher('EMPTY input...', 400));
  }
  return res.status(200).json(postContent);
};

const updatePost = (req, res, next) => {
  const { postContent } = req.body;
  if (!postContent) {
    // throw new Error('Empty input...');
    next(errCatcher('EMPTY input...', 400));
  }
  const { postId } = req.params;
  return res.status(200).json({ postId });
};

module.exports = { getPosts, createPosts, updatePost };
