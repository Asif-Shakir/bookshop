const mongoose = require('moongose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model('Books', bookSchema);
