import React from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';
const AuthGuard = ({ children }) => {
    

  const isAuthenticated = !!sessionStorage.getItem('token');

  console.log('is check',sessionStorage.getItem('token'))


  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <>{children}</> : null;
};

export default AuthGuard;
