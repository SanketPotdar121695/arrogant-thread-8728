import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProductPage } from '../UserPage/ProductPage';
import Home from '../Home';
import Signup from '../SignUp';
import { Login } from '../Login';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Navbar/Footer';

const UserRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<ProductPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default UserRoutes;
