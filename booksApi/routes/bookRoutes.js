const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');
router.get('/books', bookController.getBooks);
router.post('/addbook', bookController.postAddBook);

module.exports = router;
