const router = require('express').Router();

const { getComments, createComment } = require('../controllers/index');


router.get('/comments', getComments);

router.post('/create-comment', createComment);

module.exports = router;
