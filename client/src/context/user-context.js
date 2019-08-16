import React, { createContext } from 'react';
import useAuth from '../hooks/useAuth';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const {
    data: { user }
  } = useAuth();

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
