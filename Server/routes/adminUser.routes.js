const { Router } = require('express');
const {
  getOrdinaryUsers,
  getAdmins,
  deleteOrdinaryUser,
  deleteAdmin,
  addAdmin,
  updateAdmin
} = require('../controllers/adminUser.controllers');

// Setting up the admin user Router
const adminUserRoutes = Router();

// GET request to get all ordinary users
adminUserRoutes.get('/users', auth, getOrdinaryUsers);

// GET request to get all admins && superadmins
adminUserRoutes.get('/admin', auth, getAdmins);

// DELETE request for deleting an ordinary user
adminUserRoutes.delete('/user/:id', auth, deleteOrdinaryUser);

// DELETE request to delete an admin by a super admin
adminUserRoutes.delete(
  '/delete/admin/:id',
  auth,
  superadminVerify,
  deleteAdmin
);

// POST request to add a new admin by a super admin
adminUserRoutes.post('/add/admin', auth, superadminVerify, addAdmin);

// PATCH request to update an admin credentials by a super admin
adminUserRoutes.patch('/update/admin/:id', auth, superadminVerify, updateAdmin);

module.exports = { adminUserRoutes };
