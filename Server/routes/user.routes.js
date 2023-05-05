const { Router } = require('express');
const { validator } = require('../middlewares/validator.middleware');
const { getOrders, addOrder } = require('../controllers/orders.controllers.js');
const {
  getProducts,
  getSingleProduct
} = require('../controllers/products.queries');

const {
  getCart,
  addCart,
  updateCart,
  deleteCart,
  emptyCart
} = require('../controllers/cart.controllers');

const {
  getAddress,
  addAddress,
  updateAddress,
  deleteAddress
} = require('../controllers/address.controllers');

const routesToValidate = [
  '/cart',
  '/cart/add',
  '/cart/update/:cartId',
  '/cart/delete/:cartId',
  '/cart/emptycart',
  '/address',
  '/address/add',
  '/address/update/:addressId',
  '/address/delete/:addressId',
  '/orders',
  '/orders/add'
];

const userRouter = Router();

// Loop through the array of routes to validate and apply the middleware to each one
routesToValidate.forEach((route) => {
  userRouter.use(route, validator);
});

userRouter.get('/products', getProducts);

userRouter.get('/products/:productId', getSingleProduct);

userRouter.get('/cart', getCart);

userRouter.post('/cart/add', addCart);

userRouter.patch('/cart/update/:cartId', updateCart);

userRouter.delete('/cart/delete/:cartId', deleteCart);

userRouter.delete('/cart/emptycart', emptyCart);

userRouter.get('/address', getAddress);

userRouter.post('/address/add', addAddress);

userRouter.patch('/address/update/:addressId', updateAddress);

userRouter.delete('/address/delete/:addressId', deleteAddress);

userRouter.get('/orders', getOrders);

userRouter.post('/orders/add', addOrder);

module.exports = { userRouter };
