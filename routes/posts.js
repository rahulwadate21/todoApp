const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts_Controller');

router.get('/posts', postsController);

module.exports = router;