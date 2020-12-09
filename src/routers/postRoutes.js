const router = require('express').Router();
const { getPosts, createPost, updatePost } = require('../controllers/index');

router.get('/posts', getPosts);

router.post('/create-post', createPost);

router.patch('/update-post/:postId', updatePost);

module.exports = router;
