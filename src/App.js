import './App.css';
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './auth/login';
import Signup from './auth/signup';
import Dashboard from './dashboard/dashboard';
import Error from './error';
import Useradd from './dashboard/useradd';
import { ApiLoaderProvider } from './ApiLoaderContext';
import AuthGuard from './auth/auth';

function App() {
  return (
    
    <>
     <ApiLoaderProvider>
  <BrowserRouter>
     <Routes>
        <Route path="user" element={<Useradd />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<AuthGuard><Dashboard /></AuthGuard>} />
        <Route path="/" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </BrowserRouter>
      </ApiLoaderProvider>
    </>
  );
}

export default App;
