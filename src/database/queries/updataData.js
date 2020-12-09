const connection = require('../config/connection');

const updatePost = (postId, postContent) => {
    const sql = {
        text: 'UPDATE posts SET post_content = $2 WHERE id = $1',
        values: [postId, postContent],
    };
    return connection.query(`UPDATE posts SET post_content = ${postContent} WHERE id = ${postId}`);
};

module.exports = { updatePost };
