const connection = require('../config/connection');

const updateData = (postId, postContent) => {
  const sql = {
    text: 'UPDATE posts SET post_content = $2 WHERE id = $1 RETURNING post_content',
    values: [postId, postContent],
  };
  return connection.query(sql);
};

module.exports = { updateData };
