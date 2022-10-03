const Book = require("../models/books");
const User = require("../models/user");

exports.getBooks = async (req, res, next) => {
  const data = await Book.find({ creator: req.userId }).sort({ title: "asc" });
  res.json({ status: 200, message: "Sucess", resultData: data });
};
exports.getBookDetails = async (req, res, next) => {
  const bookId = req.params.bookId;
  const data = await Book.findById(bookId);
  res.json({ status: 200, message: "Sucess", resultData: data });
};

exports.postAddBook = async (req, res, next) => {
  const reqObj = JSON.parse(req.body.obj);
  const bookId = reqObj["_id"];
  try {
    if (bookId) {
      const findById = await Book.findById(bookId);
      if (findById) {
        findById.title = reqObj.title;
        findById.price = +reqObj.price;
        findById.description = reqObj.description;
        findById.pages = +reqObj.pages;
        findById.creator = req.userId;
        await findById.save();
        let findUser = await User.findById(req.userId);
        if (findUser) {
          findUser.books.push(findById);
          await findUser.save();
        } else {
          res.json({ status: 401, message: "Unauthorized user" });
        }
      } else {
        res.json({ status: 404, message: "book not found" });
      }
    } else {
      const book = new Book({
        title: reqObj.title,
        price: +reqObj.price,
        description: reqObj.description,
        pages: +reqObj.pages,
        creator: req.userId,
        imagePath: req.file.path,
      });
      const savedBook = await book.save();
      let findUser = await User.findById(req.userId);
      if (findUser) {
        findUser.books.push(savedBook);
        await findUser.save();
      } else {
        res.json({ status: 401, message: "Unauthorized user" });
      }
    }
    res.json({ status: 200, message: "Sucess" });
  } catch (err) {
    console.log(err);
  }
};
