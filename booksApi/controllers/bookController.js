const Book = require("../models/books");

exports.getBooks = async (req, res, next) => {
  debugger;
  const data = await Book.find().sort({ title: "asc" });
  res.json({ status: 200, message: "Sucess", resultData: data });
};
exports.getBookDetails = async (req, res, next) => {
  const bookId = req.params.bookId;
  const data = await Book.findById(bookId);
  res.json({ status: 200, message: "Sucess", resultData: data });
};

exports.postAddBook = async (req, res, next) => {
  const bookId = req.body["_id"];
  console.log(bookId);
  try {
    if (bookId) {
      const findById = await Book.findById(bookId);
      if (findById) {
        findById.title = req.body.title;
        findById.price = +req.body.price;
        findById.description = req.body.description;
        findById.pages = +req.body.pages;
        await findById.save();
      } else {
        res.json({ status: 404, message: "book not found" });
      }
    } else {
      const book = new Book({
        title: req.body.title,
        price: +req.body.price,
        description: req.body.description,
        pages: +req.body.pages,
      });
      await book.save();
    }
    res.json({ status: 200, message: "Sucess" });
  } catch (err) {
    console.log(err);
  }
};
