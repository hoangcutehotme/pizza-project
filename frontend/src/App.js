import React, { useState, useEffect } from 'react';
import User from './User/App';
import Admin from './Admin/App'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const UserRoute = ({ element, role }) => {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      if (userData.role === role) {
        return element;
      } else {
        if (userData.role === 'User') {
          // return <Navigate to="/"/>;
          return (<User />)
        }
        else if (userData.role === 'Admin') {
          // return <Navigate to="/admin/"/>;
          return (<Admin />)
        } 
      }
    } else {
      return (<User />);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<UserRoute element={<User />} role="User" />} />
        <Route path="/admin/*" element={<UserRoute element={<Admin />} role="Admin" />} />
      </Routes>
    </Router>
  );
}

export default App;
