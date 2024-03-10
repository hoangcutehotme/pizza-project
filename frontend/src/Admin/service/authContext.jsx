// AuthContext.js

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState()
  const [img, setImg] = useState()
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userName, setUserName, img, setImg}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export function useLogout() {
    const { setIsLoggedIn } = useAuth();
    function logout() {
      setIsLoggedIn(false);
    }
  
    return logout;
  }
