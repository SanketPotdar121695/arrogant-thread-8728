const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/db');
require('dotenv').config();

const validator = (req, res, next) => {
  let token = req.headers.authorization;

  if (token) {
    token = token.split(' ')[1];

    try {
      let decoded = jwt.verify(token, secretKey);
      req.body.userID = decoded.id;
      next();
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  } else
    return res
      .status(400)
      .send({ message: 'You are not logged in. Please login.' });
};

module.exports = { validator };
