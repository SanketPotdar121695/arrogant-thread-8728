const { Router } = require('express');
const { login, signup } = require('../controllers/user.controllers');

const userAuthRouter = Router();

userAuthRouter.post('/register', signup);

userAuthRouter.post('/login', login);

module.exports = { userAuthRouter };
