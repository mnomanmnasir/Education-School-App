// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);

  // Fetch the token from AsyncStorage during initial app load
  useEffect(() => {
    const loadToken = async () => {
      const token = await AsyncStorage.getItem('token');
      setUserToken(token);
    };
    loadToken();
  }, []);

  // Method to log in the user and store the token in AsyncStorage
  const login = async (token) => {
    setUserToken(token);
    await AsyncStorage.setItem('token', token);
  };

  // Method to log out the user and clear the token from AsyncStorage
  const logout = async () => {
    setUserToken(null);
    await AsyncStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ userToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
