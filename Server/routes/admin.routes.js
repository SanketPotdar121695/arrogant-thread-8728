const { Router } = require('express');
const {
  adminRegister,
  adminLogin
} = require('../controllers/admin.controllers');

const adminRouter = Router();

// Admin signup
adminRouter.post('/registration', adminRegister);

// Admin login
adminRouter.post('/login', adminLogin);

module.exports = { adminRouter };
