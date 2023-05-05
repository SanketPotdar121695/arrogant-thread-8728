const { Router } = require('express');
const { auth } = require('../middlewares/auth.middleware.js');
const {
  getAdminProducts,
  addAdminProducts,
  updateAdminProduct,
  deleteAdminProduct
} = require('../controllers/adminProducts.controller.js');

// Setting up the admin products Router
const adminProductRouter = Router();

// GET request for admin products
adminProductRouter.get('/products', auth, getAdminProducts);

// POST request from admin products
adminProductRouter.post('/add', auth, addAdminProducts);

// PATCH request for admin products
adminProductRouter.patch('/product/:id', auth, updateAdminProduct);

// DELETE request for admin products
adminProductRouter.delete('/product/:id', auth, deleteAdminProduct);

module.exports = { adminProductRouter };
