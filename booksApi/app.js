const express = require('express');
const bodyParser = require('body-parser');

//init & middleware

const app = express();

const bookRoutes = require('./routes/bookRoutes');
app.use(bodyParser.json());
app.use(bookRoutes);
app.listen(8080, () => {
  console.log('8080');
});
