// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import { Provider } from 'react-redux'; // Import Provider
import store from './store'; // Import your Redux store
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import ResumeForm from './components/ResumeForm';

const PrivateRoute = ({ path, element }) => {
  const currentUser = useAuth();

  return currentUser ? element : <Navigate to="/login" replace state={{ from: path }} />;
};

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute path="/dashboard" element={<Dashboard />} />}
            />
            <Route path="/logout" element={<Logout />} />
            <Route path="/resume-form" element={<ResumeForm />} />
           
          </Routes>
        </Router>
      </AuthProvider>
    </Provider>
  );
};

export default App;
