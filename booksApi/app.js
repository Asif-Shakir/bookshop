const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//init & middleware

const app = express();
const bookRoutes = require('./routes/bookRoutes');
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader(
    'Access-Control-Allow-Header',
    'Content-Type , Authorization'
  );
  next();
});
app.use(bookRoutes);
mongoose
  .connect(
    'mongodb+srv://asifshakir:123mongodb123@cluster0.6h1tvmj.mongodb.net/?retryWrites=true&w=majority'
  )
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
 