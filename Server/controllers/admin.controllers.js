const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/db.js');
const { UserModel: AdminUserModel } = require('../models/user.model.js');

const adminRegister = async (req, res) => {
  const { firstname, lastname, email, hashedPassword, role } = req.body;
  const valid = await AdminUserModel.findOne({ email });
  if (valid) {
    return res
      .status(400)
      .send({ error: 'user Already exists with this email id please' });
  }
  try {
    bcrypt.hash(hashedPassword, 12, (err, hash) => {
      const user = new AdminUserModel({
        firstname,
        lastname,
        email,
        password: hash,
        role
      });

      user.save().then((ress) => {
        return res.status(200).send({ message: 'Registartion completed' });
      });
    });
  } catch (er) {
    return res.status(400).send({ error: er.message });
  }
};

const adminLogin = async (req, res) => {
  let { email, password } = req.body;

  const valid = await AdminUserModel.findOne({ email });
  if (!valid) {
    return res.status(400).send({
      error: "User doesn't exist with this email id, please do registration"
    });
  }

  try {
    bcrypt.compare(password, valid.password, (err, decoded) => {
      if (decoded) {
        let token = jwt.sign(
          { userID: valid._id, role: valid.role },
          secretKey
        );
        return res.status(200).send({ message: 'Logged In', token });
      } else {
        return res.status(400).send({ message: 'Wrong credentials' });
      }
    });
  } catch (er) {
    return res.status(400).send({ error: er.message });
  }
};

module.exports = { adminRegister, adminLogin };
