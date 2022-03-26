const express = require('express');
const router = express.Router();
const PostController = require('../controllers/postController.js')

router.get('/', PostController.getAll)
router.post('/', PostController.create);
router.post('/img', PostController.imageUpload);
router.delete('/:id', PostController.delete)

module.exports = router;