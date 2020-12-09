const connection = require('../config/connection');

const postPosts = (postContent) => {
  const sql = {
    text: 'INSERT INTO posts(post_content) VALUES($1) RETURNING *;',
    values: [postContent],
  };

  return connection.query(sql);
};

const postComments = (commentContent, postId) => {
  const sql = {
    text: 'INSERT INTO comments(comment_content, post_id) VALUES($1, $2) RETURNING *;',
    values: [commentContent, postId],
  };
  return connection.query(sql);
};

module.exports = { postPosts, postComments };
