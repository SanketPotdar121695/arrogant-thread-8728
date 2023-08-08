import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { isAuth, role } = useSelector((store) => store.authReducer);

  if (!isAuth) {
    return <Navigate to='/login' replace state={{ data: location.pathname }} />;
  } else if (role !== 'user') return <Navigate to='/admin' replace />;
  return children;
};

export default PrivateRoute;
