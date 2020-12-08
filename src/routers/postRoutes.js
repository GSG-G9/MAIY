const router = require('express').Router();
const { getPosts, createPosts, updatePost } = require('../controllers/index');

router.get('/posts', getPosts);

router.post('/create-post', createPosts);

router.patch('/update-post/:postId', updatePost);

module.exports = router;
