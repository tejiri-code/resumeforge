// PrivateRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ path, element }) => {
  const currentUser = useAuth();

  return currentUser ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace state={{ from: path }} />
  );
};

export default PrivateRoute;
