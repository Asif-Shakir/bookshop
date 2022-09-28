const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/books', bookController.getBooks);
router.get('/bookDetail/:bookId', bookController.getBookDetails);
router.post('/addBook', bookController.postAddBook);

module.exports = router;
