const { Router } = require('express');
const {
  getOrdinaryUsers,
  getAdmins,
  deleteOrdinaryUser,
  deleteAdmin,
  addAdmin,
  updateAdmin
} = require('../controllers/adminUsers.controllers');
const { auth } = require('../middlewares/auth.middleware.js');
const {
  superadminVerify
} = require('../middlewares/superAdminVerify.middleware.js');

// Setting up the admin user Router
const adminUserRouter = Router();

// GET request to get all ordinary users
adminUserRouter.get('/users', auth, getOrdinaryUsers);

// GET request to get all admins && superadmins
adminUserRouter.get('/admins', auth, getAdmins);

// DELETE request for deleting an ordinary user
adminUserRouter.delete('/user/:id', auth, deleteOrdinaryUser);

// DELETE request to delete an admin by a super admin
adminUserRouter.delete(
  '/delete/admin/:id',
  auth,
  superadminVerify,
  deleteAdmin
);

// POST request to add a new admin by a super admin
adminUserRouter.post('/add/admin', auth, superadminVerify, addAdmin);

// PATCH request to update an admin credentials by a super admin
adminUserRouter.patch('/update/admin/:id', auth, superadminVerify, updateAdmin);

module.exports = { adminUserRouter };
