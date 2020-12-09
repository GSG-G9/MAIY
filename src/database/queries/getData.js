const connection = require('../config/connection');

const getData = () => connection.query('select posts.post_content, comments.comment_content from posts INNER JOIN comments ON posts.id = comments.post_id;');

module.exports = { getData };
