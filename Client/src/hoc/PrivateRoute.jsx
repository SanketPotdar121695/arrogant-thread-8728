import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  let navigate = useNavigate();
  let isAuth = localStorage.getItem('role');

  if (isAuth) {
    if (isAuth === 'admin' || isAuth === 'superadmin') {
      return navigate('/admin');
    } else return navigate('/');
  }
  return children;
};

export default PrivateRoute;
