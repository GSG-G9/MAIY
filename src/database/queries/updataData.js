const connection = require('../config/connection');

const updatePost = ({ postId }, { postContent }) => connection.query(`UPDATE posts SET post_content = ${postContent} WHERE id = ${postId}`);

module.exports = { updatePost };
