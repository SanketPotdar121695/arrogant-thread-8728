const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/db');

const superadminVerify = (req, res, next) => {
  let token = req.headers.token;
  if (token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (decoded.role == 'superadmin') {
        next();
      } else {
        res.status(400).send({ error: err });
      }
    });
  } else {
    res.status(400).send({ error: 'unauthorized access' });
  }
};

module.exports = { superadminVerify };
