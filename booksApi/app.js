const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

//init & middleware

const app = express();
const bookRoutes = require("./routes/bookRoutes");
app.use(bodyParser.json());
app.use(cors());
app.use(bookRoutes);
mongoose
  .connect(
    "mongodb+srv://asifshakir:123mongodb123@cluster0.6h1tvmj.mongodb.net/bookManagement?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
