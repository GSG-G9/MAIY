const connection = require('../config/connection');

const postPosts = ({ postContent }) => {
    const sql = {
        text: 'INSERT INTO posts(post_content) VALUES($1)',
        values: [postContent],
    };

    return connection.query(sql);
};

const postComments = ({ commentContent }) => {
    const sql = {
        text: 'INSERT INTO comments(comment_content) VALUES($1)',
        values: [commentContent],
    };
    return connection.query(sql);
};

module.exports = { postPosts, postComments };
