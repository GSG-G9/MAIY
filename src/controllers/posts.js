const getPosts = (req, res) => {
  res.status(200).json({});
};

const createPosts = (req, res) => {
  const { postContent } = req.body;
  if (!postContent) {
    // throw new Error('Empty input...');
    return res.status(400).json({ success: false, message: 'Empty input...' });
  }

  return res.status(200).json(postContent);
};

const updatePost = (req, res) => {
  const { postId } = req.params;
  res.status(200).json({ postId });
};

module.exports = { getPosts, createPosts, updatePost };
