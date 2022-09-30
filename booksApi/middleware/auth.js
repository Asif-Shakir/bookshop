const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.get("Authorization").split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "myspecialsecret");
  } catch (err) {
    console.log(err);
  }
  if (!decodedToken) {
    const error = new Error("Not authenticated");
    throw error;
  }
  req.userId = decodedToken.userId;
  console.log(req.userId);
  next();
};
