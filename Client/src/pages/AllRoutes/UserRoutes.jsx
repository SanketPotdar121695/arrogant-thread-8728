import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProductPage } from '../UserPage/ProductPage';
import Home from '../Home';

const UserRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<ProductPage />} />
      </Routes>
    </div>
  );
};

export default UserRoutes;
