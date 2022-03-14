import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { getLocalToken } from '../utilities/helperFunctions';

const RequireAuth = ({ children }) => {
  const token = getLocalToken();
  let location = useLocation();

  if (token === null) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default RequireAuth;
