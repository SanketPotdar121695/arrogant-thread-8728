const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/db');
const { UserModel } = require('../models/user.model');

const signup = async (req, res) => {
  try {
    const { firstname, lastname, email, password,gender } = req.body;
    let userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.status(409).json({
        message:
          'The email address you are trying to register is already in use. Please choose a different email address.'
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new UserModel({
      firstname,
      lastname,
      email,
      role: 'user',
      password: hashedPassword,
      gender
    });
    await newUser.save();
    return res.status(201).json({ message: 'Registration Successful' });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      const { _id: id, firstname, lastname, email, role } = userExist;
      const isCorrect = await bcrypt.compare(password, userExist.password);
      if (!isCorrect) {
        return res.status(401).json({ message: 'Incorrect Password' });
      } else {
        jwt.sign(
          { id, firstname, lastname, email },
          secretKey,
          {
            expiresIn: '3d'
          },
          (err, token) => {
            if (err) {
              return res.status(500).json({ message: err });
            }
            return res.status(200).json({
              message: 'Login Successfull',
              token
            });
          }
        );
      }
    } else {
      return res.status(404).json({
        message: 'User not found. Please check your email and try again.'
      });
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

module.exports = { login, signup };
