const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/db');

const superadminVerify = (req, res, next) => {
  let token = req.headers.authorization;

  if (token) {
    token = token.split(' ')[1];

    jwt.verify(token, secretKey, (err, decoded) => {
      if (decoded.role === 'superadmin') {
        next();
      } else {
        return res.status(400).send({ error: err });
      }
    });
  } else {
    return res.status(400).send({ error: 'unauthorized access' });
  }
};

module.exports = { superadminVerify };
