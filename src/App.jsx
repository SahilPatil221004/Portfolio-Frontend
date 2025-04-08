import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import Portfolio from './Portfolio'; 
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          
          <Route 
            path="/admin/dashboard" 
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            } 
          />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;