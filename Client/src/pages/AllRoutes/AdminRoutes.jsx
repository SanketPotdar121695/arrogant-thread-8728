import React from 'react';
import AdminHome from '../AdminPages/AdminHome';
import { Route, Routes } from 'react-router-dom';

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/admin' element={<AdminHome />} />
        <Route path='*' element={<h1>Page not found!</h1>} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
