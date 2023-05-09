import React from 'react';
import AdminHome from '../AdminPages/AdminHome';
import { Route, Routes } from 'react-router-dom';

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/admin' element={<AdminHome />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
