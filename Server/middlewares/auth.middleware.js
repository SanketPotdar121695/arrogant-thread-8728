const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/db');

const auth = (req, res, next) => {
  let token = req.headers.authorization;

  if (token) {
    try {
      token = token.split(' ')[1];

      jwt.verify(token, secretKey, (err, decoded) => {
        if (decoded.role === 'admin' || decoded.role === 'superadmin') {
          next();
        } else {
          return res.status(400).send({ error: err.message });
        }
      });
    } catch (err) {
      return res.status(400).send({ error: 'You are not authorized' });
    }
  }
};

module.exports = { auth };
