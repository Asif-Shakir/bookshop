const { response } = require('express');
const Book = require('../models/books');

exports.getBooks = async (req, res, next) => {
  debugger;
  const data = await Book.find().sort({ title: 'asc' });
  res.json({ status: 200, message: 'Sucess', resultData: data });
};
exports.getBookDetails = async (req, res, next) => {
  debugger;
  const bookId = req.params.bookId;
  console.log(bookId);
  const data = await Book.findById(bookId);
  res.json({ status: 200, message: 'Sucess', resultData: data });
};

exports.postAddBook = async (req, res, next) => {
  console.log(req.body);
  const book = new Book({
    title: req.body.title,
    price: +req.body.price,
    description: req.body.description,
    pages: +req.body.pages,
  });
  try {
    await book.save();
    res.json({ status: 200, message: 'Sucess' });
  } catch (err) {}
};
