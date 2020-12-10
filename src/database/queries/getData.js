const connection = require('../config/connection');

// eslint-disable-next-line max-len
// const getData = () => connection.query('select posts.post_content, comments.comment_content from posts INNER JOIN comments ON posts.id = comments.post_id;');
const getData = () => connection.query('SELECT * FROM posts;');

module.exports = { getData };
