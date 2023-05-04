// AuthContext.js

import React, { createContext, useReducer } from 'react';
import { authReducer, initialAuthState } from '../reducer/AuthReducer';

export const AuthContext = createContext({
  authState: initialAuthState,
  dispatch: () => null,
});

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ authState, dispatch, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
