import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ProductPage } from '../UserPages/ProductPage';
import SingleProductPage from '../UserPages/SingleProductPage';

import Home from '../UserPages/Home';
import Cart from '../UserPages/Cart';

import Signup from '../UserPages/SignUp';
import Login from '../UserPages/Login';

import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Navbar/Footer';

import PrivateRoute from '../../hoc/PrivateRoute';

const UserRoutes = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<ProductPage />} />
        <Route path='/store/:id' element={<SingleProductPage />} />
        <Route
          path='/bag'
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path='/signup'
          element={
            // <PrivateRoute>
            <Signup />
            // </PrivateRoute>
          }
        />
        <Route
          path='/login'
          element={
            // <PrivateRoute>
            <Login />
            // </PrivateRoute>
          }
        />
        <Route path='*' element={<h1>Page not found!</h1>} />
      </Routes>

      <Footer />
    </div>
  );
};

export default UserRoutes;
