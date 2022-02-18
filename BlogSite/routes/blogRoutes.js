const express = require('express');
const { blog_index, blog_create_get, blog_details, blog_delete, blog_create_post } = require('../controllers/blogController')
const router = express.Router();

// get all blogs
router.get('/', blog_index);

// load new blog webpage
router.get('/create', blog_create_get);

// get single blog
router.get('/:id', blog_details);

// delete blog
router.delete('/:id', blog_delete)

// create blog
router.post('/', blog_create_post)

module.exports = router;