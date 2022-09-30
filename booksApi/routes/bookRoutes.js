const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const isAuthenticated = require("../middleware/auth");
router.get("/books", bookController.getBooks);
router.get("/bookDetail/:bookId", bookController.getBookDetails);
router.post("/addBook", isAuthenticated, bookController.postAddBook);

module.exports = router;
